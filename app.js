const express = require('express');
require('dotenv').config()

const app = express();
const port = 4001;


app.get('/status', (req, res) => {
    res.send('Status Check!');
});

app.get('/ENV', (req, res) => {
  //token Dev
  let PORT = process.env.PORT;
  let NAME = process.env.MY_NAME;
  let DEPLOYMENTGROUPNAME = process.env.DEPLOYMENT_GROUP_NAME;
  res.send(`Status Check! ${PORT}, ${NAME}, ${DEPLOYMENTGROUPNAME}`);
});

// Start server
const server = app.listen(port, () => {
  console.log("Server started on port " + port);
});

module.exports = server;
