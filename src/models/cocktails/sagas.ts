import { SagaIterator } from '@redux-saga/types';
import { takeLatest, put, call } from 'redux-saga/effects';

import { fetchCocktailsError, fetchCocktailsSuccess } from './actions';
import { endpoint, actionTypes as at } from './constants';
import * as T from './types';

export async function fetchCocktailsApi(query: string): Promise<T.CocktailsResponse> {
  const response = await fetch(`${endpoint}?s=${query}`);

  return response.json();
}

export function* fetchCocktailsSaga({ payload }: T.FetchCocktails): SagaIterator {
  try {
    const { query } = payload;
    const data = yield call(fetchCocktailsApi, query);

    yield put(fetchCocktailsSuccess(data as T.CocktailsResponse));
  } catch (error) {
    yield put(fetchCocktailsError());
  }
}

export default function* root(): SagaIterator {
  yield takeLatest(at.FETCH_COCKTAILS, fetchCocktailsSaga);
}
