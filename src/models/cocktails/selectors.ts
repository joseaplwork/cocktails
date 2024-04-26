import { createSelector } from 'reselect';

import { RootState } from 'setup/types';

import * as T from './types';

export const cocktailsReducerSelector = (state: RootState): T.CocktailsState => state.CocktailsReducer;

export const cocktailsSelector = createSelector(cocktailsReducerSelector, usersReducer => {
  return usersReducer.cocktails;
});

export const loadingSelector = createSelector(cocktailsReducerSelector, usersReducer => {
  return usersReducer.loading;
});

export const errorSelector = createSelector(cocktailsReducerSelector, usersReducer => {
  return usersReducer.error;
});
