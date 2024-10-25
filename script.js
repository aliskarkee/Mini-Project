document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('weather-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const city = document.getElementById('city').value;
        const apiKey = 'c03ef4c2469bb7aa64f094b4d9e877fb'; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('City not found'); // Handle HTTP errors

            const data = await response.json();
            displayWeather(data); // Function to display weather data
        } catch (error) {
            alert(`Error: ${error.message}. Please check the city name or your API key.`);
        }
    });

    // Function to display weather data
    function displayWeather(data) {
        const weatherContainer = document.getElementById('weather-result');
        weatherContainer.innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    }
});
