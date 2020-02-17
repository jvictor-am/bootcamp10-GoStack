import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';

import SessionController from './app/controllers/SessionController';

import RecipientController from './app/controllers/AdminController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);

routes.put('/users/:id', UserController.update);

routes.post('/store', RecipientController.store);

routes.put('/update/:id', RecipientController.update);

// routes.get('./', (req, res) => {
//   return res.json({ message: 'Hello Word' });
// });

export default routes;
