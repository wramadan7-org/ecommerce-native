import { default as axios } from 'axios'
// import env

const http = (token = null) => {
  const headers = {}
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return axios.create({
    // baseurl env
    headers
  })
}

export default http
