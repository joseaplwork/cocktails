import * as T from './types';
import { actionTypes as AT } from './constants';

export function fetchDogsRecipes(query: string): T.FetchDogsRecipes {
  return {
    type: AT.FETCH_DOGS_RECIPES,
    payload: { query },
  };
}

export function fetchDogsRecipesSuccess(json: T.DogsRecipesJsonData): T.FetchDogsRecipesSuccess {
  return {
    type: AT.FETCH_DOGS_RECIPES_SUCCESS,
    payload: { json },
  };
}

export function emitFetchDogsRecipesFinish(): T.EmitFetchDogsRecipesFinish {
  return {
    type: AT.EMIT_FETCH_DOGS_RECIPES_FINISH,
  };
}
