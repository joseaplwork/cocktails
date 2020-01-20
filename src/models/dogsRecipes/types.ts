import { actionTypes as AT } from './constants';
import { AnyAction } from 'redux';

/* STATE */
export type DogsRecipies = Array<{
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}>;

export interface DogsRecipesState {
  dogsRecipes: DogsRecipies | [];
}

/* ACTIONS */
export interface FetchDogsRecipesSuccess extends AnyAction {
  type: typeof AT.FETCH_DOGS_RECIPES_SUCCESS;
  payload: {
    json: DogsRecipesJsonData;
  };
}

export interface FetchDogsRecipes extends AnyAction {
  type: typeof AT.FETCH_DOGS_RECIPES;
  payload: {
    query: string;
  };
}

export interface EmitFetchDogsRecipesFinish extends AnyAction {
  type: typeof AT.EMIT_FETCH_DOGS_RECIPES_FINISH;
}

export type DogsRecipesActions = FetchDogsRecipes | FetchDogsRecipesSuccess | EmitFetchDogsRecipesFinish;

/* ACTIONS DATA */
export interface DogsRecipesJsonData {
  title: string;
  version: number;
  href: string;
  results: DogsRecipies;
}
