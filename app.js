// app.js hoặc server.js
const express = require('express');
const sequelize = require('./config/db');
const authRouter = require('./router/authRouter');
const userRoutes = require('./router/userRouter');

const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL database successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MySQL database:', err);
  });

app.use(bodyParser.json());

app.use('/api/auth', authRouter);
app.use('/api/admin', userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
