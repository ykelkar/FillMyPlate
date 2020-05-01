import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem (count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit, 
            ingredient
        }
        this.items.push(item);

        // Persist data in localStorage
        this.persistData();

        return item;
    }

    deleteItem (id) {
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index, 1);

        // Persist data in localStorage
        this.persistData();
    }

    clearItems() {
        this.items = [];

        // Persist data in localStorage
        this.persistData();
    }
    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
        
        // Persist data in localStorage
        this.persistData();
    }

    persistData() {
        localStorage.setItem('list', JSON.stringify(this.items));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('list'));
        
        // Restoring list from the localStorage
        if (storage) this.items = storage;
    }
}