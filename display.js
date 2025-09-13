import weatherHandler from "./handler.js";

class DisplaySquare {
    static displaySquareDict = {};
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
        DisplaySquare.displaySquareDict[fieldNameText] = this;
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
    let processedObject = {};
    for (const field of weatherHandler.getCurrentConditionFieldNames()) {
        processedObject[field] = json.currentConditions[field];
    }
    for (const field of weatherHandler.getOtherFieldNames()) {
        processedObject[field] = json[field];
    }
    return processedObject;
}

function changeLocationDisplay(locationName, latitude, longitude) {
    const locationDisplay = document.querySelector("#location");
    locationDisplay.textContent = `${locationName} (${latitude}°, ${longitude}°)`;
}

async function setWeatherGif(condition) {
    const gifDisplay = document.getElementById("weather-gif");
    let url = `https://api.giphy.com/v1/gifs/translate?api_key=dSQ5JGT1YBzHMzG4YwAaMcbxoJzuJrWR&s=${condition}`
    try {
        let response = await fetch(url);
        let json = await response.json();
        gifDisplay.style.backgroundImage = `url(${json.data.images.original.url}`;
    } catch (error) {
        alert("Invalid URL");
    }

}

const displayFieldDict = {"temp": "temperature", "feelslike": "Feels Like", "datetime": "time", "conditions": "conditions", "source": "source"};

export function initiateDisplay() {
    for (let fieldName in displayFieldDict) {
        const displaySquare = new DisplaySquare(displayFieldDict[fieldName]);
        displaySquare.initiate();
    }
}

export async function updateDisplay(locationName, unitGroup) {
    if (!locationName) {
        locationName = "london";
    }
    const json = await weatherHandler.makeWeatherQuery(locationName, unitGroup);
    const resolvedAddress = json["resolvedAddress"];
    const data = processJSON(json);
    changeLocationDisplay(resolvedAddress, data["latitude"], data["longitude"]);
    
    for (let field in displayFieldDict) {
        const displayKey = displayFieldDict[field];
        const display = DisplaySquare.displaySquareDict[displayKey];

        if (display) {
            display.updateValue(data[field]);
        }
    }

    setWeatherGif(data["icon"]);

    return resolvedAddress;
}

