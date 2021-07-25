import axios from "axios";

const storeApi = axios.create({
    baseURL: 'https://fakestoreapi.com'
});
storeApi.defaults.params = {}
//newsApi.defaults.params['apiKey'] = process.env.REACT_APP_API_KEY;
export default storeApi;