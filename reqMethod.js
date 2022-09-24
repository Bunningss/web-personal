import axios from 'axios';

const base_URL = process.env.API_URL

export const publicCall = axios.create({
    baseURL: base_URL
})