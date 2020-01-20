import { takeLatest, put, call } from 'redux-saga/effects';
import * as T from './types';
import { SagaIterator } from '@redux-saga/types';
import { emitFetchDogsRecipesFinish, fetchDogsRecipesSuccess } from './actions';
import { FetchDogsRecipes } from './types';
import { actionTypes as at } from './constants';
import { endpoint } from './constants';

export async function fetchDogsRecipesApi(query: string): Promise<T.DogsRecipesJsonData> {
  const response = await fetch(`${endpoint}?i=${query}`);

  return response.json();
}

export function* fetchDogBreedsSaga({ payload }: FetchDogsRecipes): SagaIterator {
  const { query } = payload;
  const data = yield call(fetchDogsRecipesApi, query);

  yield put(fetchDogsRecipesSuccess(data as T.DogsRecipesJsonData));
  yield put(emitFetchDogsRecipesFinish());
}

export default function* root(): SagaIterator {
  yield takeLatest(at.FETCH_DOGS_RECIPES, fetchDogBreedsSaga);
}
