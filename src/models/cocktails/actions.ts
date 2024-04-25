import * as T from './types';
import { actionTypes as AT } from './constants';

export function fetchCocktails(query: string): T.FetchCocktails {
  return {
    type: AT.FETCH_COCKTAILS,
    payload: { query },
  };
}

export function fetchCocktailsSuccess(json: T.CocktailsJsonData): T.FetchCocktailsSuccess {
  return {
    type: AT.FETCH_COCKTAILS_SUCCESS,
    payload: { json },
  };
}

export function emitFetchCocktailsFinish(): T.EmitFetchCocktailsFinish {
  return {
    type: AT.EMIT_FETCH_COCKTAILS_FINISH,
  };
}
