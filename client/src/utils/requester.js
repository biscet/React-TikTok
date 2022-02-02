import axios from 'axios'

const instance = axios.create({
  baseURL: ''
})

//window.axios = instance

export default instance
