import weatherHandler from "./handler.js";

const displays = document.querySelectorAll(".display");
console.log(displays);

const locationForm = document.querySelector("form#locationForm");
const searchbar = document.querySelector("#search");

locationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = searchbar.value;
    weatherHandler.makeWeatherQuery(location);
})

