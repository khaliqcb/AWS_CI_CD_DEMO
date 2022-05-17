const express = require('express');

const app = express();
const port = 3000;

app.get('/health', (req, res) => {
    res.send("Health Check")
});

app.get('/health1', (req, res) => {
    res.send("Health1 Check")
});

app.get('/health2', (req, res) => {
    res.send("Health2 Check")
});

app.get('/health3', (req, res) => {
    res.send("Health3 Check")
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
