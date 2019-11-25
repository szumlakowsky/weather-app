import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const showWeather = (weather) => {
    const markup = `
        <div class="weather-name">${weather.city}, ${weather.country}</div>
        <div class="weather-icon"><img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.desc}"></div>
        <div class="weather-description">${weather.desc}</div>
        <div class="weather-min-temp"><p>min</p><p>${weather.minTemp}&#176C</p></div>
        <div class="weather-temp">${weather.temp}&#176C</div>
        <div class="weather-max-temp"><p>max</p><p>${weather.maxTemp}&#176C</p></div>
    `;

    elements.likeButton.style.display = 'inline-block';
    elements.result.insertAdjacentHTML('beforeend', markup);
};

export const clearWeather = () => {
    elements.result.innerHTML = '';
    elements.likeButton.style.display = 'none';
};

export const setLikeButton = (weatherID, favorites) => {
    if(favorites.includes(weatherID)) {
        elements.likeButton.classList.remove('far');
        elements.likeButton.classList.add('fas');
    } else {
        elements.likeButton.classList.remove('fas');
        elements.likeButton.classList.add('far');
    }
};

export const toggleLikeButton = () => {
    elements.likeButton.classList.toggle('far');
    elements.likeButton.classList.toggle('fas');
};