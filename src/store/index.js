import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  // getDefaultMiddleware().prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
