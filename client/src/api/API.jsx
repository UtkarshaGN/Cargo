import axios from 'axios'


//axios - send HTTP request to the backend 
const API = axios.create({
    baseURL: import.meta.env.VITE_BASEURL
})

export default API