import { put, call, takeLatest } from 'redux-saga/effects';
import { getBook } from '../../../api/books';
import { BOOK_ITEM_FETCH_START } from '../actionTypes/booksConst';
import {
  bookItemFetchError,
  bookItemFetchInProgress,
  bookItemFetchSuccess,
} from '../actions/booksAction';

function* bookFetchSaga({ payload: { id } }) {
  try {
    yield put(bookItemFetchInProgress());
    const data = yield call(getBook, id);
    yield put(bookItemFetchSuccess(data));
  } catch (error) {
    yield put(bookItemFetchError());
  }
}

export function* bookFetchWatcher() {
  yield takeLatest(BOOK_ITEM_FETCH_START, bookFetchSaga);
}
