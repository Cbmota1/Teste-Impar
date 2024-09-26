import axios from 'axios'

const apiURL = axios.create({
    baseURL: 'https://swapi.dev/api/people/'
});

export default apiURL;