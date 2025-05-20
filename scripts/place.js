
document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", () => {

    function calculateWindChill(temperature, windSpeed) {
        return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    }

    try {

        const temperatureText = document.querySelector(".weather-row:nth-child(1) .value").textContent.trim();
        const windSpeedText = document.querySelector(".weather-row:nth-child(3) .value").textContent.trim();


        const temperature = parseFloat(temperatureText.replace("°F", ""));
        const windSpeed = parseFloat(windSpeedText.replace(" mph", ""));


        if (isNaN(temperature) || isNaN(windSpeed)) {
            throw new Error("Invalid temperature or wind speed values.");
        }


        let windChill = "N/A"; 
        if (temperature <= 50 && windSpeed > 3) {
            windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + "°F";
        }


        const windChillElement = document.querySelector(".weather-row:nth-child(4) .value");
        if (windChillElement) {
            windChillElement.textContent = windChill;
        } else {
            throw new Error("Wind chill element not found in the DOM.");
        }
    } catch (error) {
        console.error("Error calculating wind chill:", error.message);
    }
});
