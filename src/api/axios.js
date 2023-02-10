import axios from "axios";

export default axios.create({
    //baseURL: "http://api.tabin.com.br/" //remoto
    baseURL: "http://localhost:3002", //local
});