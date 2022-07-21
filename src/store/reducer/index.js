import { combineReducers } from 'redux';

import bookReducer from '../../pages/BookDetails/reducer/bookItem';
import booksReducer from '../../pages/Books/reducer/bookList';
import statisticReducer from '../../pages/Statistics/reducer/bookList';
import modal from '../modal/reducer/modal';

import { booksSliceName } from '../../pages/Books/reducer/constants';
import { bookItemSliceName } from '../../pages/BookDetails/reducer/constants';
import { statisticsSliceName } from '../../pages/Statistics/reducer/constants';

export default combineReducers({
  [bookItemSliceName]: bookReducer,
  [booksSliceName]: booksReducer,
  [statisticsSliceName]: statisticReducer,
  modal,
});
