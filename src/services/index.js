import axios from 'axios'

const Client = axios.create({ baseURL: 'https://api.themoviedb.org/3/movie' })

export default Client
