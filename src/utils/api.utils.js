import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.17.211.4:8000/api'
})

api.interceptors.request.use(config => {
  return config
}, error => {})

export const login = async ({ username, password }) => {
  const user = await api.post('/login', {username, password})

  console.log(user)
}