import { combineReducers } from 'redux';
import bookReducer from '../../pages/BookDetails/reducers/bookItem';
import booksReducer from '../../pages/Books/reducers/bookList';
import statisticReducer from '../../pages/Statistics/reducers/bookList';

import { booksSliceName } from '../../pages/Books/reducers/constants';
import { bookItemSliceName } from '../../pages/BookDetails/reducers/constants';
import { statisticsSliceName } from '../../pages/Statistics/reducers/constants';

export default combineReducers({
  [bookItemSliceName]: bookReducer,
  [booksSliceName]: booksReducer,
  [statisticsSliceName]: statisticReducer,
});
