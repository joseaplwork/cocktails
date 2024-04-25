import { cocktailsReducerSelector, cocktailsSelector } from '../selectors';
import { CocktailsState, Cocktails } from '../types';

describe('Cocktails - selectors', () => {
  it('should select the whole state', () => {
    const CocktailsReducer: CocktailsState = { cocktails: [] };
    const mockedState = {
      CocktailsReducer,
    };

    expect(cocktailsReducerSelector(mockedState)).toEqual(CocktailsReducer);
  });

  it('should select the cocktails', () => {
    const cocktails: Cocktails = [{ title: 'test', thumbnail: 'test', ingredients: 'test' }];
    const CocktailsReducer: CocktailsState = { cocktails };
    const mockedState = {
      CocktailsReducer,
    };

    expect(cocktailsSelector(mockedState)).toEqual(cocktails);
  });
});
