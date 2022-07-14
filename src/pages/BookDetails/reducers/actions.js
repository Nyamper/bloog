export const bookItemFetchStartAction = () => {};
export const bookItemFetchInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};
export const bookItemFetchSuccessAction = (state, action) => {
  state.loading = false;
  state.data = action.payload;
};
export const bookItemFetchErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};
