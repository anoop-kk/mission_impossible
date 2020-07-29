import { Router } from 'express';
import path from 'path';
const vehicleRouter = Router();
import vehicle from '../controller/vehicle';
// routes
vehicleRouter.post('/', vehicle.getVechicle);
vehicleRouter.post('/create', vehicle.createVehicle);

export default vehicleRouter;