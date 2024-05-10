// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('food_app', 'root', 'root1234', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL database successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MySQL database:', err);
  });

module.exports = sequelize;
