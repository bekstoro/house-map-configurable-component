import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://demo4452328.mockable.io',
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  config => {
    return config
  },
  e => Promise.reject(e)
)


export const Service = {
  getProperties: () => instance.get('/properties'),

  getTemplates: () => instance.get('/templates')
}
