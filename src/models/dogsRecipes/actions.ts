import * as T from './types';
import { actionTypes as AT } from './constants';

export function fetchDogsRecipes(payload: string): T.FetchDogsRecipes {
  return {
    type: AT.FETCH_DOGS_RECIPES,
    payload,
  };
}

export function fetchDogsRecipesSuccess(payload: T.DogsRecipesJsonData): T.FetchDogsRecipesSuccess {
  return {
    type: AT.FETCH_DOGS_RECIPES_SUCCESS,
    payload,
  };
}

export function emitFetchDogsRecipesFinish(): T.EmitFetchDogsRecipesFinish {
  return {
    type: AT.EMIT_FETCH_DOGS_RECIPES_FINISH,
  };
}
