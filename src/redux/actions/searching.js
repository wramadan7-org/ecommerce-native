import http from '../../helpers/http';
import qs from 'querystring';

export default {
  searchItem: (search) => ({
    type: 'SEARCH_ITEM',
    payload: http().get(`public/items?search=${search}`),
  }),
  clearSearch: () => ({
    type: 'CLEAR_SEARCH',
  }),
};
