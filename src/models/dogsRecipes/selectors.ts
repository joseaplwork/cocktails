import { createSelector } from 'reselect';
import { RootState } from 'setup/types';
import * as T from './types';

export const dogsRecipesReducerSelector = (state: RootState): T.DogsRecipesState => state.dogsRecipesReducer;

export const dogsRecipesSelector = createSelector(dogsRecipesReducerSelector, usersReducer => usersReducer.dogsRecipes);
