import { updateDisplay, initiateDisplay } from "./display.js";


export default async function init() {
    const locationForm = document.getElementById("locationForm");
    const searchbar = document.getElementById("search");
    const unitChanger = document.getElementById("unit");
    let currentLocation = "london";

    function getUnitGroup() {
        return unitChanger.value;
    }

    if (locationForm) {
        locationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const location = searchbar.value;
            currentLocation = location;
            updateDisplay(currentLocation, getUnitGroup());
        })
    }

    if (unitChanger) {
        unitChanger.addEventListener("change", () => {
            updateDisplay(currentLocation, getUnitGroup());
        })
    }

    (() => {
        initiateDisplay();
        updateDisplay(currentLocation, getUnitGroup());
    })();
}

//display will do all the acutal updating of the UI, and a single function call providing a city name will do that very simply. tihs file will in teh init set up the programmatic cubes