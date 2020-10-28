import http from '../../helpers/http'

const doLogin = (email, password) => ({
  type: 'LOGIN',
  payload: http().post()
})
