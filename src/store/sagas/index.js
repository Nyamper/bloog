import { all, fork } from 'redux-saga/effects';

import booksFetchWatcher from '../../pages/Books/sagas';
import bookFetchWatcher from '../../pages/BookDetails/sagas';
import statisticsFetchWatcher from '../../pages/Statistics/sagas';

const combinedSagas = {
  books: booksFetchWatcher,
  bookItem: bookFetchWatcher,
  statistics: statisticsFetchWatcher,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
