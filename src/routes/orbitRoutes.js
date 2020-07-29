import { Router } from 'express';
import path from 'path';
const orbitRouter = Router();
import orbit from '../controller/orbit';
// routes
orbitRouter.post('/', orbit.getBestOrbit);
orbitRouter.post('/create', orbit.createOrbit);

export default orbitRouter;