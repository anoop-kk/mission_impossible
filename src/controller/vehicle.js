import { VehicleModel } from "../models/index.model";
async function createVehicle (request, response){
    let status = 200;
    let message = "create Vechicle";
    let result = {};
    let error = {};
    let { name, speed, craterSpeed, allowedInRainy, allowedInSunny, allowedInWindy } = request.body;
    try {
       const vehicle = new VehicleModel({
           name,
           speed,
           craterSpeed,
           allowedInRainy,
           allowedInSunny,
           allowedInWindy
       });
       result.vehicle = await vehicle.save();
    } catch (error) {
        console.log(error);
    }
    response.status(200).json({ status, message, result, error })
}
async function getVechicle(request, response) {
    let status = 200;
    let message = "get vechicle api";
    let result = {};
    let error = {};
    // let { } = request.body;
    try {
        result.vehicles = await VehicleModel.find({});
    } catch (error) {
        console.log(error)
    }
    response.status(200).json({ status, message, result, error })
}
export default { getVechicle, createVehicle }