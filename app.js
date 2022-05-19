const express = require('express');

const app = express();
const port = 3000;

app.get('/status', (req, res) => {
    let name = process.env.APIKEY;
    res.send(`Status Check! ${name} `);
});

app.get('/hello', (req, res) => {
    res.send("Hello World!")
});

app.get('/health', (req, res) => {
  res.send("Health Check!")
});


// Start server
const server = app.listen(port, () => {
  console.log("Server started on port " + port);
});

module.exports = server;