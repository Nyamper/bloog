import { combineReducers } from 'redux';
import booksReducer from '../../pages/Books/reducers/booksReducer';

export default combineReducers({
  bookItem: booksReducer,
});
