import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './redux/reducers/RootReducer';
import RootSaga from './redux/sagas/RootSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);
export default store;
