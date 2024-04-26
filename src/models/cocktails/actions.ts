import { actionTypes as AT } from './constants';
import * as T from './types';

export function fetchCocktails(query: string): T.FetchCocktails {
  return {
    type: AT.FETCH_COCKTAILS,
    payload: { query },
  };
}

export function fetchCocktailsSuccess(json: T.CocktailsResponse): T.FetchCocktailsSuccess {
  return {
    type: AT.FETCH_COCKTAILS_SUCCESS,
    payload: { json },
  };
}

export function fetchCocktailsError(): T.FetchCocktailsError {
  return {
    type: AT.FETCH_COCKTAILS_ERROR,
  };
}
