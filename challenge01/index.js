const express = require('express');

const server = express();

server.use(express.json());

const users = ['João', 'Jubileu', 'Zezinho'];

server.get('/users', (req, res) => {
  return res.json(users);
});

server.listen(3333);
