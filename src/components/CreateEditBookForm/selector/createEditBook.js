import { createSelector } from 'reselect';

const createBookStateSelector = (state) => state.createEditBookModal;

export const createShowSelector = createSelector(
  createBookStateSelector,
  (createEditBookModal) => createEditBookModal.show
);

export const titleSelector = createSelector(
  createBookStateSelector,
  (createEditBookModal) => createEditBookModal.title
);

export const createEditLoadingSelector = createSelector(
  createBookStateSelector,
  (createEditBookModal) => createEditBookModal.loading
);

export const createEditErrorSelector = createSelector(
  createBookStateSelector,
  (createEditBookModal) => createEditBookModal.error
);

export const bookIdSelector = createSelector(
  createBookStateSelector,
  (createEditBookModal) => createEditBookModal.bookId
);

export const isCreateSelector = createSelector(
  createBookStateSelector,
  (createEditBookModal) => createEditBookModal.isCreate
);
