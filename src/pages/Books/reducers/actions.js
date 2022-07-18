export const fetchBooksPendingAction = (state, action) => {
  state.loading = true;
  state.error = null;
};
export const fetchBooksFulfilledAction = (state, action) => {
  state.loading = false;
  state.data = action.payload;
};
export const fetchBooksRejectedAction = (state, action) => {
  state.loading = false;
  state.error = true;
};
