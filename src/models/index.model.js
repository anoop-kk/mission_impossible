import VehicleSchema from '../schemas/vehicle.schema';
import OrbitSchema from '../schemas/orbit.schema';
import mongo from '../libs/mongo';
import { connection } from 'mongoose';
export const VehicleModel = connection.model('vehicle', VehicleSchema);
export const OrbitModel = connection.model('orbit', OrbitSchema);
