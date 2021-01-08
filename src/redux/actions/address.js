import http from '../../helpers/http';
import qs from 'querystring';

export default {
  myShippingAddress: (token) => ({
    type: 'GET_ADDRESS',
    payload: http(token).get('customer/address'),
  }),
  addAddress: (token, data) => ({
    type: 'ADD_ADDRESS',
    payload: http(token).post('customer/address', qs.stringify(data)),
  }),
  addressByParams: (token, param) => ({
    type: 'PARAMS_ADDRESS',
    payload: http(token).get(`customer/address/${param}`),
  }),
  changeAddress: (token, id, data) => ({
    type: 'CHANGE_ADDRESS',
    payload: http(token).put(`customer/address/${id}`, qs.stringify(data)),
  }),
};
