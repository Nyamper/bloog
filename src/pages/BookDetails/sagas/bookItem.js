import { put, call, takeLatest } from 'redux-saga/effects';
import { getBook } from '../../../api/books';

import {
  bookItemFetchStart,
  bookItemFetchError,
  bookItemFetchInProgress,
  bookItemFetchSuccess,
} from '../reducers/bookItem';

function* bookItemFetchSaga({ payload }) {
  try {
    yield put(bookItemFetchInProgress());
    const data = yield call(getBook, payload.bookId);
    yield put(bookItemFetchSuccess(data));
  } catch (error) {
    yield put(bookItemFetchError());
  }
}

export default function* bookItemFetchWatcher() {
  yield takeLatest(bookItemFetchStart, bookItemFetchSaga);
}
