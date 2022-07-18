import { createSlice } from '@reduxjs/toolkit';

import { createBook, editBook } from '../thunk/createEditThunk';

import { createEditModalSliceName } from './constants';
import * as actions from './actions';

const initialState = {
  loading: false,
  error: null,
  title: '',
  show: false,
  book: {},
  bookId: '',
  isCreate: null,
};

const createEditBookSlice = createSlice({
  name: createEditModalSliceName,
  initialState,
  reducers: {
    showCreateEditModal: actions.showCreateEditModalAction,
    hideCreateEditModal: actions.hideCreateEditModalAction,
    setTitle: actions.setTitleAction,
    getBookId: actions.getBookIdAction,
    createModal: actions.createModalAction,
    editModal: actions.editModalAction,
  },

  extraReducers: {
    [createBook.pending]: actions.createBookPendingAction,
    [createBook.fulfilled]: actions.createBookFulfilledAction,
    [createBook.rejected]: actions.createBookRejectedAction,
  },

  secondExtraReducers: {
    [editBook.pending]: actions.editBookPendingAction,
    [editBook.fulfilled]: actions.editBookFulfilledAction,
    [editBook.rejected]: actions.editBookRejectedAction,
  },
});

export const {
  showCreateEditModal,
  hideCreateEditModal,
  setTitle,
  getBookId,
  createModal,
  editModal,
} = createEditBookSlice.actions;

export default createEditBookSlice.reducer;
