import { elements } from "./base";

export const showFavorites = (favorites) => {
    favorites.forEach((cur, index) => {
        const markup = `
            <div class="${index % 2 === 1 ? "fav-dark" : "fav-light"}">
                <div class="fav-name">${cur.name}</div>
                <div class="fav-temp">${cur.temp}&#176</div>
                <div class="fav-icon"><img src="http://openweathermap.org/img/wn/${cur.icon}@2x.png"></div>
            </div>
        `;

        elements.favorites.insertAdjacentHTML('beforeend', markup);
    });
};

export const clearFavorites = () => elements.favorites.innerHTML = '';