import { OrbitModel, VehicleModel } from "../models/index.model";
const weather = [
    {
        name: "Sunny",
        effectsOnCraters: -10,
    },
    {
        name: "Rainy",
        effectsOnCraters: 20,
    },
    {
        name: "Windy",
        effectsOnCraters: 0,
    }
]
async function createOrbit(request, response) {
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
    let find = {};
    let cratersDefluction = 0;
    switch (wheather) {
        case "Rainy":
            Object.assign(find, { allowedInRainy: true })
            cratersDefluction = 20;
            break;
        case "Sunny":
            Object.assign(find, { allowedInSunny: true });
            cratersDefluction = -10;
            break;
        case "Windy":
            Object.assign(find, { allowedInWindy: true })
            break;
        default:
            break;
    }
    try {
        let vehicles = await VehicleModel.find(find);
        // finds speed for each vechicles 
        let suggestion = await getOrbitSpeed(vehicles, cratersDefluction, orbit_1_speed, orbit_2_speed);
        let best = await pickBest(suggestion);
        result = {...best};
    } catch (error) {
        console.log(error)
    }
    response.status(200).json({ status, message, result, error })
}
async function getOrbitSpeed(vehicles, cratersDefluction, orbit_1_speed, orbit_2_speed) {
    const orbits = await OrbitModel.find();
     
    let orbit_1 = orbits[0];
    let orbit_2 = orbits[1];
    let suggestion = [];
    vehicles.forEach(vehicle => {

        let { name, speed, craterSpeed } = vehicle;
        // weather fluctuation with craters 
        let orbit_1_craters = orbit_1.craters + cratersDefluction/100;
        let orbit_2_craters = orbit_2.craters + cratersDefluction/100;
        let traffic_speed_1 = speed; 
        let traffic_speed_2 = speed; 
        if (orbit_1_speed < speed) {
            traffic_speed_1 = orbit_1_speed;
        }
        if (orbit_2_speed < speed) {
            traffic_speed_2 = orbit_2_speed;
        }
        let timeNeededOrbit1 = orbit_1.distance * (1/traffic_speed_1 * 60) + (craterSpeed * orbit_1_craters);
        let timeNeededOrbit2 = orbit_2.distance * (1/traffic_speed_2 * 60) + (craterSpeed * orbit_2_craters);
        let orbit = 1;
        let orbitTime = 0;
        if (timeNeededOrbit1 > timeNeededOrbit2) {
            orbit = 2
            orbitTime = timeNeededOrbit2;
        }else{
            orbit = 1
            orbitTime = timeNeededOrbit1;
        }
        suggestion.push({
            vehicle:name,
            orbit,
            orbitTime
        })
    });
    return suggestion;
    
}
async function pickBest(suggestions) {
    // console.log(suggestions)
    
    let best = {
        vehicle:suggestions[0].vehicle,
        orbit: suggestions[0].orbit,
        time: suggestions[0].orbitTime,
    }
    
    suggestions.forEach(suggestion => {
        if (suggestion.orbitTime < best.time) {
            best = {
                vehicle:suggestion.vehicle,
                orbit: suggestions.orbit,
                time: suggestions.orbitTime,
            }
        }
    });
    
    return best;
}
export default { getBestOrbit, createOrbit }