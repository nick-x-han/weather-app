const API_KEY = "2SVD9LX4P99P5TDBUWYCFZ59V";

const weatherHandler = (() => {
    async function makeWeatherQuery(locationInput, unit = "metric") {
        const locations = [encodeURIComponent(locationInput), "london"];

        for (const location of locations) {
            try {
                let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}&unitGroup=${unit}`);
                if (!response.ok) {
                    console.warn(`Failed for ${location}, trying fallback`);
                    continue;
                }
                const json = await response.json();
                return json;
            }
            catch (error) {
                console.warn(`Failed for ${location}:`, error.message);
            }
        }

        throw new Error('Could not fetch weather data from any location');
    }
    function getCurrentConditionFieldNames() {
        const fields = ["temp", "feelslike", "datetime", "conditions", "source", "icon"];
        return fields;
    }
    function getOtherFieldNames() {
        const fields = ["latitude", "longitude"];
        return fields;
    }

    return { makeWeatherQuery, getCurrentConditionFieldNames, getOtherFieldNames };
})();




export default weatherHandler;