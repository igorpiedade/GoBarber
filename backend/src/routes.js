import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.add);

routes.post('/users', UserController.add);
routes.put('/users', authMiddleware , UserController.update);

routes.post('/files', authMiddleware, upload.single('file'), (req, res) => {
      return res.json({ ok: true });
})



export default routes;