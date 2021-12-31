import axios from "axios";

//07242380/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api