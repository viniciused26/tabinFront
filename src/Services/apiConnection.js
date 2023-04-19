import axios from "axios";

const tabinAPI = axios.create({
    // baseURL: "https://api.tabin.com.br/" //remoto
    baseURL: "http://localhost:3002", //local
});

export { tabinAPI };