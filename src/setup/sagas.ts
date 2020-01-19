import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';

import dogsRecipesSagas from '../models/dogsRecipes/sagas';

export default function* rootSaga(): SagaIterator {
  yield all([fork(dogsRecipesSagas)]);
}
