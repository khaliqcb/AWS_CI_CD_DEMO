const express = require('express');

const app = express();
const port = 3000;

app.get('/status', (req, res) => {
    res.send("Status Check!")
});

// Start server
const server = app.listen(port, () => {
  console.log("Server started on port " + port);
});

module.exports = server;
