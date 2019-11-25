import { key } from '../config';
import axios from 'axios';

export default class Favorites {
    constructor() {
        this.favorites = [];
    }

    addOrRemove(id) {
        const index = this.favorites.indexOf(id);
        if(index === -1) {
            this.favorites.push(id);
        } else {
            this.favorites.splice(index, 1);
        }
    }

    async getResults() {
        this.results = [];
        for(const id of this.favorites) {
            try {
                const url = `http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${key}`;
                const res = await axios(url);
                this.results.push({
                    id: res.data.id,
                    name: res.data.name,
                    temp: Math.round(res.data.main.temp - 273.15),
                    icon: res.data.weather[0].icon
                });
            } catch(error) {
                alert('Error getting results for the favorite weathers!');
                console.log(error);
            }
        }
    }

    persistData() {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }

    getStorage() {
        var storage = localStorage.getItem('favorites');
        if(storage) this.favorites = JSON.parse(storage);
    }
}