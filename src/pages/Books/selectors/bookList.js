import { createSelector } from 'reselect';

const bookListStateSelector = (state) => state.books;

export const bookListLoadingSelector = createSelector(
  bookListStateSelector,
  (books) => books.loading
);

export const bookListDataSelector = createSelector(
  bookListStateSelector,
  (books) => books.data
);

export const bookListErrorSelector = createSelector(
  bookListStateSelector,
  (books) => books.error
);

export const bookListUpdateStateSelector = createSelector(
  bookListStateSelector,
  (books) => books.updateState
);

export const bookListCreateStateSelector = createSelector(
  bookListStateSelector,
  (books) => books.createState
);

export const bookListDeleteStateSelector = createSelector(
  bookListStateSelector,
  (books) => books.deleteState
);
