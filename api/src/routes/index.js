import { Router } from 'express';

import professionalTypesRouter from './professional.types.routes';
import professionalsRouter from './professionals.routes';

const routes = Router();

routes.use('/professional-types', professionalTypesRouter);
routes.use('/professionals', professionalsRouter);

export default routes;
