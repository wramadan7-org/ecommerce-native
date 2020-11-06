import http from '../../helpers/http'
import qs from 'querystring'

export default {
  myProfile: (token) => ({
    type: 'MYPROFILE',
    payload: http(token).get('customer/profile')
  })
}
