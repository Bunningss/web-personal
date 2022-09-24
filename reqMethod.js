import axios from 'axios';

const base_URL = process.env.baseURL

export const publicCall = axios.create({
    baseURL: base_URL
})