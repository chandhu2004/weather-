const apiKey = "9287d2bf97a7649f7a42dea739ec292d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

function getWeather() {
    let city = document.getElementById("city").value.trim(); // Fix: Corrected the ID and trimmed whitespace

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) { // Fix: Ensure response is successful
                document.getElementById("weatherInfo").innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            } else {
                alert("City not found! Try again.");
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Something went wrong. Please try again.");
        });
}
