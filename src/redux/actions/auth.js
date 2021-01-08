import http from '../../helpers/http';
import qs from 'querystring';

export default {
  doLogin: (data) => ({
    type: 'LOGIN',
    payload: http().post('login/customer', qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};
