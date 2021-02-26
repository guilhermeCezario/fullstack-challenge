import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import ProfessionalTypesController from '../app/controllers/ProfessionalTypesController';

const routes = Router();

routes.post('/', celebrate({
  [Segments.BODY]: {
    description: Joi.string().required(),
    phone: Joi.string(),
    situation: Joi.bool().required(),
  },
}), ProfessionalTypesController.store);

export default routes;
