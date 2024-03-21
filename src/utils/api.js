import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key: 'AIzaSyBSoJuaM8WSdDqbkfqQOdFVaspgpmFKnyg',
    cx: 'a31e6dd9b1cf544da'
}
export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
};
