const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbSQL');
const User = require('../models/userSQL');

const TaskSQL = sequelize.define('task', {

    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
    title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    description: {
        type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM('pending', 'in-progress', 'completed'),
      defaultValue: 'pending'
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  });


  
  User.hasMany(TaskSQL, { foreignKey: 'userId' });
  TaskSQL.belongsTo(User, { foreignKey: 'userId' });

module.exports = TaskSQL;