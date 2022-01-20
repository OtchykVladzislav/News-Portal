import axios from 'axios';

export default class PostOnline {
    static async getAll(url){
        try {
            const response = await axios.get(url)
            return response.data;
        } catch (error) {
            console.log(error)        
        }
    }
}