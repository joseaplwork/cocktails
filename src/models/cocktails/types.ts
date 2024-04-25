import { actionTypes as AT } from './constants';
import { AnyAction } from 'redux';

/* STATE */
export type Cocktails = Array<{
  title: string;
  ingredients: string;
  thumbnail: string;
}>;

export interface CocktailsState {
  cocktails: Cocktails;
}

/* ACTIONS */
export interface FetchCocktailsSuccess extends AnyAction {
  type: typeof AT.FETCH_COCKTAILS_SUCCESS;
  payload: {
    json: CocktailsResponse;
  };
}

export interface FetchCocktails extends AnyAction {
  type: typeof AT.FETCH_COCKTAILS;
  payload: {
    query: string;
  };
}

export interface EmitFetchCocktailsFinish extends AnyAction {
  type: typeof AT.EMIT_FETCH_COCKTAILS_FINISH;
}

export type CocktailsActions = FetchCocktails | FetchCocktailsSuccess | EmitFetchCocktailsFinish;

/* ACTIONS DATA */
export interface CocktailsDTO {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strIngredient1?: string | null;
  strIngredient2?: string | null;
  strIngredient3?: string | null;
  strIngredient4?: string | null;
  strIngredient5?: string | null;
  strIngredient6?: string | null;
  strIngredient7?: string | null;
  strIngredient8?: string | null;
  strIngredient9?: string | null;
  strIngredient10?: string | null;
  strIngredient11?: string | null;
  strIngredient12?: string | null;
  strIngredient13?: string | null;
  strIngredient14?: string | null;
  strIngredient15?: string | null;
}

export interface CocktailsResponse {
  drinks: Array<CocktailsDTO>;
}
