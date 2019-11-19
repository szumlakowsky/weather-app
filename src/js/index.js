import Weather from './models/Weather';
import * as weatherView from './views/weatherView';
import { elements } from './views/base';

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
        // Clear the weather result
        weatherView.clearWeather();

        // Show the weather on the page
        if(state.weather.temp) weatherView.showWeather(state.weather);
    });
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