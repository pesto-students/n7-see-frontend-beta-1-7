import createSagaMiddleware from "@redux-saga/core";
import RootReducer from './redux/reducers/RootReducer';
import { createStore,applyMiddleware } from 'redux';
import RootSaga from './redux/sagas/RootSagas';
const sagaMiddleware=createSagaMiddleware();
const store=createStore(RootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);
export default store;