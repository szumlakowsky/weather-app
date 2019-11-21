import { elements } from './views/base';
import Weather from './models/Weather';
import Favorites from './models/Favorites';
import * as weatherView from './views/weatherView';
import * as favoritesView from './views/favoritesView';

// THE STATE OBJECT FOR THE DATA
const state = {};

/***************** FUNCTIONS *****************/

// CREATE WEATHER OBJECT FOR SEARCHED CITY
const searchWeather = () => {
    // Get input from search
    const input = weatherView.getInput();

    // Clear the input
    weatherView.clearInput();

    // Add weather to the state
    state.weather = new Weather(input);
};

// GET THE DATA AND DISPLAY THE WEATHER
const displayWeather = () => {
    // Get results for the searched weather
    state.weather.getResults().then(function() {
        // Clear the weather results
        weatherView.clearWeather();

        // Display the weather results
        if(state.weather.temp) weatherView.showWeather(state.weather);

        // Set the like button to the correct one
        if(state.favorites) weatherView.setLikeButton(state.weather.id, state.favorites.favorites);
    });
};

const favoritesControl = () => {
    // Toggle like button
    weatherView.toggleLikeButton();

    // Create a state for the favorites
    if(!state.favorites) state.favorites = new Favorites();

    // Add or remove weather from favorites array
    state.favorites.addOrRemove(state.weather.id);
};

/***************** EVENT LISTENERS *****************/

// ENTER BUTTON
document.addEventListener('keydown', e => {
    if(e.keyCode === 13) {
        searchWeather();
        displayWeather();
    }
});

// MOUSE CLICK ON THE SEARCH ICON
elements.searchIcon.addEventListener('click', e => {
    searchWeather();
    displayWeather();
});

// MOUSE CLICK ON THE LIKE BUTTON
elements.likeButton.addEventListener('click', e => {
    favoritesControl();
});