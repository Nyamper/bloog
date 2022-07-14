export const booksFetchStartAction = () => {};
export const booksFetchInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};
export const booksFetchSuccessAction = (state, action) => {
  state.loading = false;
  state.data = action.payload;
};
export const booksFetchErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};
