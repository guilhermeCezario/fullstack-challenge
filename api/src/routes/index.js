import { Router } from 'express';

const routes = Router();

routes.get('/', async (req, res) => {
  res.json({ status: 400 });
});

export default routes;
