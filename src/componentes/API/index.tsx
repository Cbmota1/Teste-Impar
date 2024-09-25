import axios from "axios";

export const getData = async () => {
    const url = 'https://swapi.dev/api/people/1';
    const {data : {name}} = await axios.get(url);
    return name;
}