import axios from "axios";


const instance = axios.create({
    baseURL: "https://drs-burger.firebaseio.com/"
});


export default instance;
