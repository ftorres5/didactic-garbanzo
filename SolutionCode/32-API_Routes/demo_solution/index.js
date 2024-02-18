const express = require('express');
const server = express();
const PORT = 8080;
const morgan = require('morgan');
const cors = require('cors');

const { client }  = require('./db/client');
client.connect();

server.use(cors());

// logging middleware
server.use(morgan('dev'));
// parsing middleware
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use('/api', require('./api'));

server.get("/health", (req, res) => {
  res.send("Server is healthy")
})

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});
