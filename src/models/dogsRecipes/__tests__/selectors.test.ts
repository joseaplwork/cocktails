import { dogsRecipesReducerSelector, dogsRecipesSelector } from '../selectors';
import { DogsRecipesState, DogsRecipies } from '../types';

describe('dogsRecipes - selectors', () => {
  it('should select the searcher state', () => {
    const dogsRecipesReducer: DogsRecipesState = { dogsRecipes: [] };
    const mockedState = {
      dogsRecipesReducer,
    };

    expect(dogsRecipesReducerSelector(mockedState)).toEqual(dogsRecipesReducer);
  });

  it('should select the searcher state', () => {
    const dogsRecipes: DogsRecipies = [{ title: 'test', thumbnail: 'test', ingredients: 'test', href: 'test' }];
    const dogsRecipesReducer: DogsRecipesState = { dogsRecipes };
    const mockedState = {
      dogsRecipesReducer,
    };

    expect(dogsRecipesSelector(mockedState)).toEqual(dogsRecipes);
  });
});
