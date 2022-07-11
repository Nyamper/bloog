import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

// import {
//   legacy_createStore as createStore,
//   applyMiddleware,
//   compose,
// } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import rootSaga from './sagas';
// import rootReducer from './reducers';

// const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composapplyMiddlewareSaga);

// export default store;
