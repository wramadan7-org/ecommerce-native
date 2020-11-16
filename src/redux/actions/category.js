import http from '../../helpers/http';

export default {
  getData: () => ({
    type: 'GET_DATA_CATEGORY',
    payload: http().get('public/category'),
  }),
};
