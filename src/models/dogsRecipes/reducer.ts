import { actionTypes as AT } from './constants';
import * as T from './types';

const initialState: Readonly<T.DogsRecipesState> = {
  dogsRecipes: [],
};

export default function dogsRecipesReducer(
  state: T.DogsRecipesState = initialState,
  action: T.DogsRecipesActions,
): T.DogsRecipesState {
  switch (action.type) {
    case AT.FETCH_DOGS_RECIPES_SUCCESS:
      return { ...state, dogsRecipes: action.payload.results };
    default:
      return state;
  }
}
