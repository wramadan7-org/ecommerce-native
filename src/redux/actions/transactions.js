import http from '../../helpers/http';
import qs from 'querystring';

export default {
  addTransactions: (token, data) => ({
    type: 'ADD_TRANSACTION',
    payload: http(token).post('customer/transaction', qs.stringify(data)),
  }),
  resetTransactions: () => ({
    type: 'RESET_TRANSACTION',
  }),
};
