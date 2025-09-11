const API_KEY = "2SVD9LX4P99P5TDBUWYCFZ59V";

const weatherHandler = (() => {
    async function getLocationWeatherData(locationInput) {
        const location = locationInput;
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`, { mode: 'cors' });
        const json = await response.json();
        return json;
    }

    return { getLocationWeatherData };
})();




export default weatherHandler;