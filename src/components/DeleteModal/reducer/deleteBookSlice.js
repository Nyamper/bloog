import { createSlice } from '@reduxjs/toolkit';
import { deleteBookSliceName } from './constants';
import { removeBook } from '../thunk/deleteBookThunk';
import {
  removeBookPendingAction,
  removeBookFulfilledAction,
  removeBookRejectedAction,
} from './actions';

const initialState = {
  loading: true,
  error: null,
};

const deleteBookSlice = createSlice({
  name: deleteBookSliceName,
  initialState,
  extraReducers: {
    [removeBook.pending]: removeBookPendingAction,
    [removeBook.fulfilled]: removeBookFulfilledAction,
    [removeBook.rejected]: removeBookRejectedAction,
  },
});

export default deleteBookSlice.reducer;
