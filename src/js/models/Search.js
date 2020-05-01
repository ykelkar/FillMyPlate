
import axios from 'axios'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
        }
        catch(error) {
            const code = error.request.status;
            if (code !== 200) {
                console.log(`Status code: ${code} returned from forkify API...`);
            }
        }
    }
}