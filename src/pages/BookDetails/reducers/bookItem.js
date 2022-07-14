import { createSlice } from '@reduxjs/toolkit';
import { bookItemSliceName } from './constants';
import {
  bookItemFetchStartAction,
  bookItemFetchInProgressAction,
  bookItemFetchSuccessAction,
  bookItemFetchErrorAction,
} from './actions';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const bookItemSlice = createSlice({
  name: bookItemSliceName,
  initialState,
  reducers: {
    bookItemFetchStart: bookItemFetchStartAction,
    bookItemFetchInProgress: bookItemFetchInProgressAction,
    bookItemFetchSuccess: bookItemFetchSuccessAction,
    bookItemFetchError: bookItemFetchErrorAction,
  },
});

export const {
  bookItemFetchStart,
  bookItemFetchInProgress,
  bookItemFetchError,
  bookItemFetchSuccess,
} = bookItemSlice.actions;

export default bookItemSlice.reducer;
