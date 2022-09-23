import axios from 'axios'

const base_URL = 'http://localhost:3000/api/'

export const publicCall = axios.create({
    baseURL: base_URL
})