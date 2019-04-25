import { combineReducers } from 'redux';

import login from './login';
import books from './books';

export default combineReducers({
  login,
  books,
});
