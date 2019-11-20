import { key } from '../config';
import axios from 'axios';

export default class Weather {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.query}&APPID=${key}`;
            const res = await axios(url);
            const weather = res.data;

            this.city = weather.name,
            this.country = weather.sys.country,
            this.temp = Math.round(weather.main.temp - 273.15);
            this.minTemp = Math.round(weather.main.temp_min - 273.15);
            this.maxTemp = Math.round(weather.main.temp_max - 273.15);
            this.desc = weather.weather[0].description;
            this.icon = weather.weather[0].icon;
        } catch(error) {
            alert('Error getting the weather! Try again.');
            console.log(error);
        }
    }
};