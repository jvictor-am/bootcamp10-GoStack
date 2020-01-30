const express = require('express'); // importação da dependência express

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params =/useers/1 -> id do usuário
// Request body ={"name": "João", "email": "jvrck@rocketseat.com"} -> conteúdo dentro das rotas POST e PUT.

const users = ['João', 'Jubileu', 'Jamanta'];

server.use((req, res, next) => {
  //console.log('A requisição foi chamada! :)');
  console.time('Request');
  console.log(`Método: ${req.method} ; URL: ${req.url}`);

  next();

  console.timeEnd('Request');
});

function checkUserExistance(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'name is required' });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!user) {
    return res.status(400).json({ error: 'User does not exist' });
  }

  req.user = user;

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', checkUserInArray, (req, res) => {
  // const { index } = req.params;
  // return res.json(users[index]);
  return res.json(req.user);
});

server.post('/users', checkUserExistance, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put(
  '/users/:index',
  checkUserExistance,
  checkUserInArray,
  (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
  }
);

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
});

server.listen(3000);
