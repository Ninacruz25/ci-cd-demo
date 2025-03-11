const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello CI/CD World!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;
