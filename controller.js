import updateDisplay from "./display.js";

export default async function init() {
    const locationForm = document.getElementById("locationForm");
    const searchbar = document.getElementById("search");
    const unitChanger = document.getElementById("unit");

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

    if (locationForm) {
        locationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const location = searchbar.value;
            updateDisplay(location);
        })
    }

    if (unitChanger) {
        unitChanger.addEventListener("change", () => {
            console.log(unitChanger.value);
        })
    }

    (() => {
        console.log("DD");
    })();
}

//display will do all the acutal updating of the UI, and a single function call providing a city name will do that very simply. tihs file will in teh init set up the programmatic cubes