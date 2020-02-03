import { Router } from 'express';
// import UserController from './app/controllers/UserController';
// import SessionController from './app/controllers/SessionController';
// import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/tests', (req, res) => {
  return res.json({ message: 'hello world!' });
});

// routes.post('/users', UserController.store);
// routes.post('/sessions', SessionController.store);

// Exige o Token de autenticação a partir daqui
// routes.use(authMiddleware);
// routes.put('/users', UserController.update);

export default routes;
