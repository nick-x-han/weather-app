import weatherHandler from "./handler.js";

class DisplaySquare {
    constructor() {
        
    }
}
export default async function updateDisplay(locationName) {
    function processJSON(json) {
        console.log(json);
        let processedObject = {};
        for (const field of weatherHandler.getCurrentConditionFieldNames()) {
            processedObject[field] = json.currentConditions[field];
        }
        for (const field of weatherHandler.getOtherFieldNames()) {
            processedObject[field] = json[field];
        }
        return processedObject;
    }

    const json = await weatherHandler.makeWeatherQuery(locationName);
    processJSON(json);
}

