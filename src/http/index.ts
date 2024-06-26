
import axios from "axios";

const http = axios.create({
    baseURL: 'http://0.tcp.sa.ngrok.io:12482/'
})

export default http;