import { createSlice } from '@reduxjs/toolkit';
import { statisticsSliceName } from './constants';
import {
  statisticsFetchStartAction,
  statisticsFetchInProgressAction,
  statisticsFetchSuccessAction,
  statisticsFetchErrorAction,
} from './actions';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const statisticsSlice = createSlice({
  name: statisticsSliceName,
  initialState,
  reducers: {
    statisticsFetchStart: statisticsFetchStartAction,
    statisticsFetchInProgress: statisticsFetchInProgressAction,
    statisticsFetchSuccess: statisticsFetchSuccessAction,
    statisticsFetchError: statisticsFetchErrorAction,
  },
});

export const {
  statisticsFetchStart,
  statisticsFetchInProgress,
  statisticsFetchError,
  statisticsFetchSuccess,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
