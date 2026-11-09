const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/api/auth', userRoutes);

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Session 7 MVC project is running.'
  });
});

module.exports = app;