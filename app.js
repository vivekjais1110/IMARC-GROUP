const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { Op } = require('sequelize');
const sequelize = require('./config/dbSQL');
const userRoutes = require('./routes/userRoutes');
const taskSQL_Routes = require('./routes/taskSQL_Routes');
const errorHandler = require('./middlewares/errorHandler');


const cron = require('node-cron');
const moment = require('moment');
const transport = require("./middlewares/nodemailer");
const User = require('./models/userSQL');
const TaskSQL = require('./models/taskSQL');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', taskSQL_Routes);

app.use(errorHandler);

//Databases

sequelize.sync()
  .then(() => console.log('Connected to SQL Database'))
  .catch((error) => console.error('SQL Database connection error:', error));

//Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// 30 sec '*/30 * * * * *'
// 30 minute '*/30 * * * *'
// 24 h '0 0 * * *'
// 10 AM '0 10 * * *'
// 3 PM'0 15 * * *'


cron.schedule('0 10 * * *', async () => {
  try {
    console.log('Checking for tasks nearing deadlines...');

    const today = moment().startOf('day').toDate();
    const threeDaysLater = moment().add(3, 'days').endOf('day').toDate();
    
    // Query with Sequelize
    const tasks = await TaskSQL.findAll({
      where: {
        dueDate: {
          [Op.gte]: today,
          [Op.lte]: threeDaysLater,
        },
      },
    });

    if (tasks.length === 0) {
      console.log('No tasks found nearing deadlines.');
      return;
    }


    const userIds = [...new Set(tasks.map(task => task.userId))];

 
    const users = await User.findAll({
      where: { id: userIds },
    });

    console.log(users,'user');

    for (const user of users) {
      if (user.email) {

        await transport.mailsend({
          from: 'ayushjaiswal7081@gmail.com',
          to: user.email,
          subject: `Reminder: Task Deadline Nearing (3 days left)`,
          html: `
            <p>Dear User,</p>

            <p>Your task is nearing its deadline. There are only 3 days left.</p>

            <p>Thank you!</p>
          `,
        });
        console.log(`Email sent to ${user.email}`);
      }
    }

    console.log('Task deadline notifications processed.');
  } catch (error) {
    console.error('Error processing task deadline notifications:', error);
  }
});