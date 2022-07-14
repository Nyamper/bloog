export const statisticsFetchStartAction = () => {};
export const statisticsFetchInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};
export const statisticsFetchSuccessAction = (state, action) => {
  state.loading = false;
  state.data = action.payload;
};
export const statisticsFetchErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};
