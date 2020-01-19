import { takeLatest, put, call } from 'redux-saga/effects';
import * as T from './types';
import { SagaIterator } from '@redux-saga/types';
import { emitFetchDogsRecipesFinish, fetchDogsRecipesSuccess } from './actions';
import { FetchDogsRecipes } from './types';
import { actionTypes as at } from './constants';
import { endpoint } from './constants';

function* fetchDogBreedsSaga({ payload }: FetchDogsRecipes): SagaIterator {
  const request = yield call(fetch, `${endpoint}?i=${payload}`);
  const data = yield request.json();

  yield put(fetchDogsRecipesSuccess(data as T.DogsRecipesJsonData));
  yield put(emitFetchDogsRecipesFinish());
}

export default function* root(): SagaIterator {
  yield takeLatest(at.FETCH_DOGS_RECIPES, fetchDogBreedsSaga);
}
