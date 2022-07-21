export const fetchBookPendingAction = (state, action) => {
  state.loading = true;
  state.error = null;
};
export const fetchBookFulfilledAction = (state, action) => {
  state.loading = false;
  state.data = action.payload;
};
export const fetchBookRejectedAction = (state, action) => {
  state.loading = false;
  state.error = true;
};
