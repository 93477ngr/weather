const url =
    'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
    '96030befa9115a1468f8aaec6182fff0';

$(document).ready(function () {
    weatherFn('pune');
});

async function weatherFn(cName) {
    const temp =
        `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weatherShowFn(data) {
    $('#city-name').text(data.name);
    $('#date').text(moment().
        format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').
        html(`${data.main.temp}°C`);
    $('#description').
        text(data.weather[0].description);
    $('#wind-speed').
        html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#weather-icon').
        attr('src',
            `data:image/jpeg;base64,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`);
    $('#weather-info').fadeIn();
}
