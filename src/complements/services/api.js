import axios from "axios";

//01122333/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api