const express = require('express');
const server = express();
const PORT = 8080;

const { client }  = require('./db/client');
client.connect();

server.use('/api', require('./api'));

server.get("/health", (req, res) => {
  res.send("Server is healthy")
})

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});
