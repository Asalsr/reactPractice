import axios from 'axios';


const instance = axios.create({
    baseURL: process.env.REACT_APP_UNSPLASH_URL || 'https://api.unsplash.com',
    headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
        "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
    } 

});

export default instance;