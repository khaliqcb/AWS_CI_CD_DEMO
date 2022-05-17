const express = require('express');

const app = express();
const port = 8080;

app.get('/health', (req, res) => {
    res.send("Health Check")
  });

  app.get('/health1', (req, res) => {
    res.send("Health1 Check")
  });

// Index route
// app.get('*', (req, res) => {
//   res.send("Hello World!")
// });

// Start server
const server = app.listen(port, () => {
  console.log("Server started on port " + port);
});

module.exports = server;
