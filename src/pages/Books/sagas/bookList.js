import { put, call, takeLatest } from 'redux-saga/effects';
import { getBooks } from '../../../api/books';

import {
  booksFetchStart,
  booksFetchError,
  booksFetchInProgress,
  booksFetchSuccess,
} from '../reducers/bookList';

function* booksFetchSaga() {
  try {
    yield put(booksFetchInProgress());
    const data = yield call(getBooks);
    yield put(booksFetchSuccess(data));
  } catch (error) {
    yield put(booksFetchError());
  }
}

export default function* booksFetchWatcher() {
  yield takeLatest(booksFetchStart, booksFetchSaga);
}
