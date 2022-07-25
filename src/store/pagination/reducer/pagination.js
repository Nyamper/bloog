import { createSlice } from '@reduxjs/toolkit';

import { modalOpenToggle } from '../actions/modal';

const PAGINATION_SLICE_NAME = 'PAGINATION_SLICE';

const initialState = { open: false, name: null };

const modalSlice = createSlice({
  name: PAGINATION_SLICE_NAME,
  initialState,
  reducers: { modalOpenToggle },
});

export const { modalOpenToggle: modalOpenToggleAction } = modalSlice.actions;

export default modalSlice.reducer;
