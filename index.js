const apiKey = 'e69eed45222829fd574a1b65c61b365c';



function fetchWeather() {
    const cityName = document.getElementById('nombre-ciudad').value;
    if (!cityName.trim()) {
        alert('Por favor, ingresa el nombre de una ciudad.');
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temp').textContent = Math.floor(data.main.temp) + '°C';
            document.getElementById('desc').textContent = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            document.getElementById('humedad').textContent = data.main.humidity + '%';
            document.getElementById('velocidad-viento').textContent = data.wind.speed + ' km/h';
            document.getElementById('nombre-ciudad-mostrar').textContent = data.name;
            // Establecer imagen basada en la temperatura
            const weatherImg = document.getElementById('weather-image');
            const weatherId = data.weather[0].id;

            if (weatherId >= 200 && weatherId < 300) {
                weatherImg.src = 'assets/img/imagen_tormenta.svg'; // imagenes segun el clima
                weatherImg.alt = 'Tormenta';
            } else if (temp > 30) {
                weatherImg.src = 'assets/img/imagen_sol.svg'; // imagenes segun el clima
                weatherImg.alt = 'Calor extremo';
            } else if (temp > 20) {
                weatherImg.src = 'assets/img/imagen_calor_extremo.svg'; // imagenes segun el clima
                weatherImg.alt = 'Sol';
            } else if (temp > 10) {
                weatherImg.src = 'assets/img/imagen_templado.svg'; // imagenes segun el clima
                weatherImg.alt = 'Templado';
            } else if (temp < 0) {
                weatherImg.src = 'assets/img/imagen_frio.svg'; // imagenes segun el clima
                weatherImg.alt = 'Frío';
            }
        })

        .catch(error => {
            console.error('Error al obtener datos de la API', error);
            alert('Error al buscar la ciudad: ' + error.message);
        });
}


