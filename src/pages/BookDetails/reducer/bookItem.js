import { createSlice } from '@reduxjs/toolkit';

import { bookItemSliceName } from './constants';
import * as actions from './actions';

import { fetchBook } from '../thunk/bookThunk';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const bookItemSlice = createSlice({
  name: bookItemSliceName,
  initialState,
  extraReducers: {
    [fetchBook.pending]: actions.fetchBookPendingAction,
    [fetchBook.fulfilled]: actions.fetchBookFulfilledAction,
    [fetchBook.rejected]: actions.fetchBookRejectedAction,
  },
});

export default bookItemSlice.reducer;
