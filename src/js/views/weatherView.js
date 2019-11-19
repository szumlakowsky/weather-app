import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const showWeather = (weather) => {
    const markup = `
        <div class="weather-name">${weather.city}, ${weather.country}</div>
        <div class="weather-description">${weather.desc}</div>
        <div class="weather-min-temp"><p>MIN</p><p>${weather.minTemp}&#176C</p></div>
        <div class="weather-temp">${weather.temp}&#176C</div>
        <div class="weather-max-temp"><p>MAX</p><p>${weather.maxTemp}&#176C</p></div>
    `;

    elements.result.insertAdjacentHTML('beforeend', markup);
};

export const clearWeather = () => elements.result.innerHTML = '';