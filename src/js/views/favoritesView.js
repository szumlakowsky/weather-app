import { elements } from "./base";

export const showFavorites = (favorites) => {
    favorites.forEach(cur => {
        const markup = `
            <div class="fav">
                ${cur.name} ${cur.temp}
            </div>
        `;

        elements.favorites.insertAdjacentHTML('beforeend', markup);
    });
};

export const clearFavorites = () => elements.favorites.innerHTML = '';