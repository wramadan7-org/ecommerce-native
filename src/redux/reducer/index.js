import { combineReducers } from 'redux'

import auth from './auth'
import products from './products'
import register from './register'
import profile from './profile'
import category from './category'

export default combineReducers({
  auth,
  register,
  products,
  profile,
  category
})
