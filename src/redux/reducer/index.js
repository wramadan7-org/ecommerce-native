import {combineReducers} from 'redux';

import auth from './auth';
import products from './products';
import detailProduct from './detailProduct';
import register from './register';
import profile from './profile';
import category from './category';
import editProfile from './editProfile';
import cart from './cart';
import addCart from './addCart';
import changePassword from './changePassword';
import address from './address';
import searching from './search';
import transaction from './transactions';

export default combineReducers({
  auth,
  register,
  products,
  detailProduct,
  profile,
  category,
  editProfile,
  cart,
  addCart,
  changePassword,
  address,
  searching,
  transaction,
});
