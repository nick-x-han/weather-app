import updateDisplay from "./display.js";

export default async function init() {
    const locationForm = document.getElementById("locationForm");
    const searchbar = document.getElementById("search");
    const unitChanger = document.getElementById("unit");


    if (locationForm) {
        locationForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const location = searchbar.value;
            const json = await weatherHandler.makeWeatherQuery(location);
            updateDisplay(processJSON(json));
        })
    }

    if (unitChanger) {
        unitChanger.addEventListener("change", () => {
            console.log(unitChanger.value);
        })
    }
}

//display will do all the acutal updating of the UI, and a single function call providing a city name will do that very simply. tihs file will in teh init set up the programmatic cubes