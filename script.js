const apiKey = "your api key here"; // Replace with your WeatherAPI key


// Search Weather by City
async function getWeather() {

    const city = document.getElementById("city").value;

    if(city === ""){

        alert("Please enter city name");

        return;
    }

    const url =
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        displayWeather(data);

    } catch(error){

        alert("Error fetching weather data");

    }
}



// Display Weather
function displayWeather(data){

    document.getElementById("weatherCard").style.display = "block";

    document.getElementById("cityName").innerHTML =
    data.location.name;

    document.getElementById("temperature").innerHTML =
    `Temperature: ${data.current.temp_c} °C`;

    document.getElementById("condition").innerHTML =
    `Condition: ${data.current.condition.text}`;

    document.getElementById("humidity").innerHTML =
    `Humidity: ${data.current.humidity}%`;

    document.getElementById("wind").innerHTML =
    `Wind Speed: ${data.current.wind_kph} kph`;
}