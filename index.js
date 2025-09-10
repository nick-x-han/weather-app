const API_KEY = "2SVD9LX4P99P5TDBUWYCFZ59V";

async function getLocationWeatherData(locationInput) {
    const location = locationInput;
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`, { mode: 'cors' });
    const json = await response.json();
    return json;

}

const x = await getLocationWeatherData("london");
console.log(x);