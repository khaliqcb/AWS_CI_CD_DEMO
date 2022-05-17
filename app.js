const express = require('express');

const app = express();
const port = 3001;

app.get('/health', (req, res) => {
    res.send("Health Check")
  });

// Index route
app.get('*', (req, res) => {
  res.send("Hello World!")
});

// Start server
const server = app.listen(port, () => {
  console.log("Server started on port " + port);
});

module.exports = server;