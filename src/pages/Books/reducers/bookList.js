import { createSlice } from '@reduxjs/toolkit';

import { booksSliceName } from './constants';
import { fetchBooks } from '../thunk/booksThunk';
import * as actions from './actions';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const booksSlice = createSlice({
  name: booksSliceName,
  initialState,
  extraReducers: {
    [fetchBooks.pending]: actions.fetchBooksPendingAction,
    [fetchBooks.fulfilled]: actions.fetchBooksFulfilledAction,
    [fetchBooks.rejected]: actions.fetchBooksRejectedAction,
  },
});

export default booksSlice.reducer;
