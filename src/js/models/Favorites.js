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
}