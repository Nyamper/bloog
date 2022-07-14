import { createSlice } from '@reduxjs/toolkit';
import { booksSliceName } from './constants';
import {
  booksFetchStartAction,
  booksFetchInProgressAction,
  booksFetchSuccessAction,
  booksFetchErrorAction,
} from './actions';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const booksSlice = createSlice({
  name: booksSliceName,
  initialState,
  reducers: {
    booksFetchStart: booksFetchStartAction,
    booksFetchInProgress: booksFetchInProgressAction,
    booksFetchSuccess: booksFetchSuccessAction,
    booksFetchError: booksFetchErrorAction,
  },
});
// const booksSlice = createSlice({
//   name: booksSliceName,
//   initialState,
//   reducers: {
//     booksFetchStart() {},
//     booksFetchInProgress(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     booksFetchSuccess(state, action) {
//       state.loading = false;
//       state.data = action.payload;
//     },
//     booksFetchError(state) {
//       state.loading = false;
//       state.error = true;
//     },
//   },
// });

export const {
  booksFetchStart,
  booksFetchInProgress,
  booksFetchError,
  booksFetchSuccess,
} = booksSlice.actions;

export default booksSlice.reducer;
