import { Router } from 'express';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'João Mesquita',
//     email: 'joao@mesquita93.com.br',
//     password_hash: '1234',
//   });
//   return res.json(user);
// });

export default routes;
