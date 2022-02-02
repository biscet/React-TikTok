import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:9000'
})

//window.axios = instance

export default instance
