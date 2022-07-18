import { createSlice } from '@reduxjs/toolkit';

import { statisticsSliceName } from './constants';
import { fetchStatistics } from '../thunk/statisticsThunk';
import * as actions from './actions';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const statisticsSlice = createSlice({
  name: statisticsSliceName,
  initialState,
  extraReducers: {
    [fetchStatistics.pending]: actions.fetchBooksPendingAction,
    [fetchStatistics.fulfilled]: actions.fetchBooksFulfilledAction,
    [fetchStatistics.rejected]: actions.fetchBooksRejectedAction,
  },
});

export default statisticsSlice.reducer;
