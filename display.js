import weatherHandler from "./handler.js";

class DisplaySquare {
    static displaySquareList = [];
    contentDiv = document.querySelector("#content");

    constructor(fieldNameText) {
        this.display = document.createElement("div");
        this.display.classList.add("display");
        this.fieldName = document.createElement("div");
        this.fieldName.classList.add("field-name");
        this.fieldName.textContent = fieldNameText;

        this.fieldValue = document.createElement("div");
        this.fieldValue.classList.add("field-value");

        this.display.append(this.fieldName, this.fieldValue);
        DisplaySquare.displaySquareList.push(this);
    }

    updateValue(value) {
        this.fieldValue.textContent = value;
    }

    initiate() {
        this.contentDiv.append(this.display);
    }

    clear() {
        DisplaySquare.forEach(square => {
            square.fieldValue.textContent = "";
        })
    }
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

export function initiateDisplay() {
    const fieldNames = weatherHandler.getCurrentConditionFieldNames();
    for (let fieldName of fieldNames) {
        const displaySquare = new DisplaySquare(fieldName);
        displaySquare.initiate();
    }
}
export async function updateDisplay(locationName) {
    const json = await weatherHandler.makeWeatherQuery(locationName);
    const data = processJSON(json);
    console.log(data);
}

