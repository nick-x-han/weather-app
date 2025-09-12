import weatherHandler from "./handler.js";

export default function updateDisplay(locationName) {
    //programmatically create display squares
    function generateDisplaySquare() {
        const display = document.createElement("div");
        display.classList.add("display");

        const fieldName = document.createElement("div");
        fieldName.classList.add("field-name");

        const fieldValue = document.createElement("div");
        fieldValue.classList.add("field-value");

        display.append(fieldName, fieldValue);
        return display;
    }

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
}

