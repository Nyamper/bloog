import { combineReducers } from 'redux';
import bookReducer from '../../pages/BookDetails/reducers/bookItem';
import booksReducer from '../../pages/Books/reducers/bookList';
import statisticReducer from '../../pages/Statistics/reducers/bookList';
import createEditModalReducer from '../../components/CreateEditBookForm/reducers/createEditModalSlice';
import deleteModalReducer from '../../components/DeleteModal/reducer/deleteBookSlice';

import { booksSliceName } from '../../pages/Books/reducers/constants';
import { bookItemSliceName } from '../../pages/BookDetails/reducers/constants';
import { statisticsSliceName } from '../../pages/Statistics/reducers/constants';
import { createEditModalSliceName } from '../../components/CreateEditBookForm/reducers/constants';
import { deleteBookSliceName } from '../../components/DeleteModal/reducer/constants';

export default combineReducers({
  [bookItemSliceName]: bookReducer,
  [booksSliceName]: booksReducer,
  [statisticsSliceName]: statisticReducer,
  [createEditModalSliceName]: createEditModalReducer,
  [deleteBookSliceName]: deleteModalReducer,
});
