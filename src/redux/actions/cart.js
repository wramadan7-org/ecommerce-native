import http from '../../helpers/http';
import qs from 'querystring';

export default {
  createCart: (token, data) => ({
    type: 'CREATE_CART',
    payload: http(token).post('customer/cart', qs.stringify(data)),
  }),
  getCart: (token) => ({
    type: 'GET_CART',
    payload: http(token).get('customer/cart'),
  }),
};
