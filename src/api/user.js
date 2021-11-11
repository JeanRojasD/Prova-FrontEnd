const axios = require('axios')
const config = require('./config')

const instance = axios.create({
    baseURL: `${config.baseURL}/usuarios`,
    headers: {
        "Content-Type": "application/json",
    }
})

module.exports = instance