import { cocktailsReducerSelector, cocktailsSelector } from '../selectors';
import { CocktailsState, Cocktails } from '../types';

describe('Cocktails - selectors', () => {
  it('should select the searcher state', () => {
    const CocktailsReducer: CocktailsState = { cocktails: [] };
    const mockedState = {
      CocktailsReducer,
    };

    expect(cocktailsReducerSelector(mockedState)).toEqual(CocktailsReducer);
  });

  it('should select the searcher state', () => {
    const cocktails: Cocktails = [{ title: 'test', thumbnail: 'test', ingredients: 'test', href: 'test' }];
    const CocktailsReducer: CocktailsState = { cocktails };
    const mockedState = {
      CocktailsReducer,
    };

    expect(cocktailsSelector(mockedState)).toEqual(Cocktails);
  });
});
