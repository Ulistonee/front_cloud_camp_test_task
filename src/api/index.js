import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const api = {
  submitForm: (data) => {
    apiInstance.post('/', data)
      .then(res => res.data)
      .catch(error => console.error(error))
  }
}

export default api
