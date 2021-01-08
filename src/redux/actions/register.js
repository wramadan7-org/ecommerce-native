import http from '../../helpers/http';
import qs from 'querystring';

export default {
  register: (data) => ({
    type: 'REGISTER_USER',
    payload: http().post('register/customer', qs.stringify(data)),
  }),
};
