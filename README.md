# Backend Developer Assessment
> This project implements a backend system for managing users and tasks (JWT), using Node.js, Express, MongoDB, and MySQL.
- [(Node js Assignment.docx)](https://github.com/vivekjais1110/IMARC-GROUP/blob/main/Node%20js%20Assignment.docx)

# Features
- User registration and login.
- JWT-based authentication.
- CRUD operations for tasks.
- MySQL for relational data.
- Task prioritization and status management.
- Pagination and Filter.
- Node Mailer.

# Bonus Features: 
- Filter based report on the status of task. 
- Implement task deadlines notifications (send an email notification when a task is nearing 
its due date). 
- Implement pagination for retrieving the list of tasks. 

# Setup and Installation
~ Ensure the following tools are installed on your system:
- Node.js (v12+)
- MySQL server installed.

# Clone the repository:
```sh
git clone https://github.com/vivekjais1110/IMARC-GROUP.git
```
# Install dependencies:
```sh
npm install
```

# Configure environment variables:
Create a .env file in the root directory.
Use the example below or customize as needed:
```sh
PORT=6000
JWT_SECRET=imarc
SQL_DB=imarc_group
SQL_USER=root
SQL_PASSWORD=root
SQL_HOST=localhost
SQL_DIALECT=mysql
```
# Start the server:
```sh
npm start
```

# Environment Variables
The project uses the following environment variables (found in .env):

- PORT: Port for the backend server.
- JWT_SECRET: Secret for signing JWT tokens.
- SQL_DB, SQL_USER, SQL_PASSWORD, SQL_HOST, SQL_DIALECT: MySQL database configuration.

# API Endpoints
> User Routes
- POST /api/v1/register: Register a new user.
- POST /api/v1/login: Login and receive a JWT token.

> Task Routes
- POST /api/v1/tasks_create: Create a new task.
- GET /api/v1/tasks_get: Fetch All tasks.
- PUT /api/v1/tasks_update/:id: Update a task by ID (status).
- DELETE /api/v1/tasks_delete/:id: Delete a task by ID.
 
# Bonus features API
> NODE MAILER WITH 'node-cron' (send an email or log a notification when a task is nearing its due date)
- GET api/v1/tasks_get_status: Fetch tasks based on filters (status).
- GET api/v1/getTasks_pagination Fetch tasks based on filter (e.g, page=1&limit=3)

📫 **For full API details**, import the provided Postman collection: [Imarc.postman_collection.json](https://github.com/vivekjais1110/IMARC-GROUP/blob/main/Imarc.postman_collection.json) into Postman. Make sure to check the **saved response examples** for reference.

# Dependencies
> Major dependencies used in this project include:

- Express: Web framework.
- Sequelize: ORM for MySQL.
- JWT: Token-based authentication.
- Nodemailer: Email sending.
- Node-Cron: Scheduling tasks.
- express-validator: Validator.
  
