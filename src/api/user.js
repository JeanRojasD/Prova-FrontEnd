import axios from 'axios'
import config from './config'

const instance = axios.create({
    baseURL: `${config.baseURL}/usuarios`,
    headers: {
        "Content-Accept": "application/json",
    }
})

export default instance