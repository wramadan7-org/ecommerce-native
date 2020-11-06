import http from '../../helpers/http'
import qs from 'querystring'

export default {
  getProducts: () => ({
    type: 'GET_PRODUCT',
    payload: http().get('public/items')
  })
}
