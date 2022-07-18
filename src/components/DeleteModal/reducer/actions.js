export const removeBookPendingAction = (state, action) => {
  state.loading = true;
  state.error = null;
};
export const removeBookFulfilledAction = (state, action) => {
  state.loading = false;
};
export const removeBookRejectedAction = (state, action) => {
  state.loading = false;
  state.error = true;
};
