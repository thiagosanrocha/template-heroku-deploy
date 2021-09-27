import { Router } from 'express';

export const routes = Router();

routes.use('/live', (_, res) => {
  res.json({
    message: "I'm live!",
  });
});
