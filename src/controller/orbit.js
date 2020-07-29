async function getBestOrbit(request, response) {
    let status = 200;
    let message = "get best orbit";
    let result = {};
    let error = {};
    let { wheather, orbit_1_speed, orbit_2_speed } = request.body;
    
    response.status(200).json({ status, message, result, error })
}
export default { getBestOrbit }