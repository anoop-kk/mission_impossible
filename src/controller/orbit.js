import { OrbitModel } from "../models/index.model";
async function createOrbit (request, response){
    let status = 200;
    let message = "get best orbit";
    let result = {};
    let error = {};
    let { name, distance, craters } = request.body;
    try {
       const orbit = new OrbitModel({
           name,
           distance,
           craters
       });
       result.orbit = await orbit.save();
    } catch (error) {
        console.log(error);
    }
    response.status(200).json({ status, message, result, error })
}
async function getBestOrbit(request, response) {
    let status = 200;
    let message = "get best orbit";
    let result = {};
    let error = {};
    let { wheather, orbit_1_speed, orbit_2_speed } = request.body;
    try {
        result.orbits = await OrbitModel.find({});
    } catch (error) {
        console.log(error)
    }
    response.status(200).json({ status, message, result, error })
}
export default { getBestOrbit, createOrbit }