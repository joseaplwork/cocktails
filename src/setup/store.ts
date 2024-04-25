import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import CocktailsReducer from '../models/cocktails/reducer';
import rootSaga from './sagas';

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  process.env.NODE_ENV === 'development' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeEnhancers(...enhancers);

export const rootReducer = combineReducers({
  CocktailsReducer,
});

const store = createStore(rootReducer, {}, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
