import { createSelector } from 'reselect';

const deleteBookStateSelector = (state) => state.deleteBookModal;

export const deleteLoadingSelector = createSelector(
  deleteBookStateSelector,
  (deleteBookModal) => deleteBookModal.loading
);

export const deleteErrorSelector = createSelector(
  deleteBookStateSelector,
  (deleteBookModal) => deleteBookModal.error
);
