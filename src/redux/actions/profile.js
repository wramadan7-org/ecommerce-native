import http from '../../helpers/http';
import qs from 'querystring';

export default {
  myProfile: (token) => ({
    type: 'MYPROFILE',
    payload: http(token).get('customer/profile'),
  }),
  updateProfile: (token, data) => ({
    type: 'EDIT_PROFILE',
    payload: http(token).patch('customer/profile', qs.stringify(data)),
  }),
  updatePhotoProfile: (token, data) => ({
    type: 'EDIT_PROFILE',
    payload: http(token).patch('/customer/profile', data),
  }),
  changePassword: (token, data) => ({
    type: 'CHANGE_PASSWORD',
    payload: http(token).patch('/customer/changePassword', qs.stringify(data)),
  }),
  clearPassword: () => ({
    type: 'CLEAR_PASSWORD',
  }),
};
