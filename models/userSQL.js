const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbSQL');

const User = sequelize.define('user', {

  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },

  email: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: false,
    validate: { isEmail: true }
  },

  password: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  


});

module.exports = User;