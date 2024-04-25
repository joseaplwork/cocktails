import { takeLatest, put, call } from 'redux-saga/effects';
import * as T from './types';
import { SagaIterator } from '@redux-saga/types';
import { emitFetchCocktailsFinish, fetchCocktailsSuccess } from './actions';
import { FetchCocktails } from './types';
import { actionTypes as at } from './constants';
import { endpoint } from './constants';

export async function fetchCocktailsApi(query: string): Promise<T.CocktailsJsonData> {
  const response = await fetch(`${endpoint}?s=${query}`);

  return response.json();
}

export function* fetchCocktailsSaga({ payload }: FetchCocktails): SagaIterator {
  const { query } = payload;
  const data = yield call(fetchCocktailsApi, query);

  yield put(fetchCocktailsSuccess(data as T.CocktailsJsonData));
  yield put(emitFetchCocktailsFinish());
}

export default function* root(): SagaIterator {
  yield takeLatest(at.FETCH_COCKTAILS, fetchCocktailsSaga);
}
