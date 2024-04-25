import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';

import CocktailsSagas from 'models/cocktails/sagas';

export default function* rootSaga(): SagaIterator {
  yield all([fork(CocktailsSagas)]);
}
