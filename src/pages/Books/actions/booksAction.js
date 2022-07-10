import {
  BOOK_ITEM_FETCH_START,
  BOOK_ITEM_FETCH_IN_PROGRESS,
  BOOK_ITEM_FETCH_SUCCESS,
  BOOK_ITEM_FETCH_ERROR,
} from '../actionTypes/booksConst';

export const bookItemFetchStart = (id) => ({
  type: BOOK_ITEM_FETCH_START,
  payload: { id },
});

export const bookItemFetchInProgress = () => ({
  type: BOOK_ITEM_FETCH_IN_PROGRESS,
});

export const bookItemFetchSuccess = (data) => ({
  type: BOOK_ITEM_FETCH_SUCCESS,
  payload: { data },
});

export const bookItemFetchError = (id) => ({
  type: BOOK_ITEM_FETCH_ERROR,
  payload: { id },
});
