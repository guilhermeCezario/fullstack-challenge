import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import ProfessionalsController from '../app/controllers/ProfessionalsController';

const routes = Router();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      phone: Joi.string(),
      email: Joi.string(),
      type_profession_id: Joi.number().required(),
      situation: Joi.bool().required(),
    },
  }),
  ProfessionalsController.store,
);

export default routes;
