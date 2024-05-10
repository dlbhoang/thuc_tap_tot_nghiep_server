const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dietaryRestrictions: {
    type: DataTypes.STRING,
    allowNull: true
  },
  allergies: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
