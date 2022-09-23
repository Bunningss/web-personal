import axios from 'axios'

const base_URL = process.env.baseURL || 'https://tmahmud.herokuapp.com/api/'

export const publicCall = axios.create({
    baseURL: base_URL
})