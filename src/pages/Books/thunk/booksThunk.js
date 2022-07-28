import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  BOOK_LIST_FETCH_THUNK_TYPE,
  BOOK_LIST_CREATE_THUNK_TYPE,
  BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE,
  BOOK_LIST_UPDATE_THUNK_TYPE,
  BOOK_LIST_DELETE_THUNK_TYPE,
} from './constants';
import {
  postBook,
  deleteBook,
  getBooks,
  getBook,
  updateBook,
} from '../../../api/books';
import {
  bookCreateInProgressAction,
  bookCreateSuccessAction,
  bookCreateErrorAction,
  bookUpdateInProgressAction,
  bookUpdateSuccessAction,
  bookUpdateErrorAction,
  bookDeleteSuccessAction,
  bookDeleteErrorAction,
  bookDeleteInProgressAction,
  bookUpdateReset,
} from '../reducer/bookList';

import { modalOpenToggleAction } from '../../../store/modal/reducer/modal';

export const bookListFetch = createAsyncThunk(
  BOOK_LIST_FETCH_THUNK_TYPE,
  async (_, { rejectWithValue }) => {
    try {
      return await getBooks();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const bookItemCreate = createAsyncThunk(
  BOOK_LIST_CREATE_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      dispatch(bookCreateInProgressAction());
      await postBook(data);
      dispatch(bookCreateSuccessAction());
      dispatch(modalOpenToggleAction());
      toast.success(`${data.title} successfully created`);
      await dispatch(bookListFetch());
    } catch (error) {
      toast.error(`book wasn't created`);
      dispatch(bookCreateErrorAction(error.data));
    }
  }
);

export const bookItemUpdateDataFetch = createAsyncThunk(
  BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      return await getBook(data.id);
    } catch (error) {
      toast.error(`book wasn't loaded`);
      dispatch(bookCreateErrorAction(error.data));
    }
  }
);

export const bookItemUpdate = createAsyncThunk(
  BOOK_LIST_UPDATE_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      dispatch(bookUpdateInProgressAction());
      await updateBook(data, data.id);
      dispatch(bookUpdateSuccessAction());
      dispatch(modalOpenToggleAction());
      dispatch(bookUpdateReset());
      toast.success(`${data.title} successfully update`);
      await dispatch(bookListFetch());
    } catch (error) {
      toast.error(`${data.title} wasn't updated`);
      dispatch(bookUpdateErrorAction(error.data));
    }
  }
);

export const bookItemDelete = createAsyncThunk(
  BOOK_LIST_DELETE_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      dispatch(bookDeleteInProgressAction());
      await deleteBook(data._id);
      dispatch(bookDeleteSuccessAction());
      toast.success(`${data.title} deleted`);
      dispatch(modalOpenToggleAction());
      await dispatch(bookListFetch());
    } catch (error) {
      toast.error(`book wasn't deleted`);
      dispatch(bookDeleteErrorAction(error.data));
    }
  }
);

// export const cancelRequest = createAsyncThunk(
//   'BOOK_LIST_CANCEL_REQUEST_THUNK_TYPE',
//   async ({ dispatch }) => {
//     try {
//       await dispatch(controller.abort());
//     } catch (error) {
//       console.log('cancelRequest', error);
//     }
//   }
// );
