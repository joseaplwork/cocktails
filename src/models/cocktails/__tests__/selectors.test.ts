import { cocktailsReducerSelector, cocktailsSelector, loadingSelector } from '../selectors';
import { CocktailsState, Cocktails } from '../types';

describe('Cocktails - selectors', () => {
  it('should select the whole state', () => {
    const CocktailsReducer: CocktailsState = { cocktails: [], loading: false, error: false };
    const mockedState = {
      CocktailsReducer,
    };

    expect(cocktailsReducerSelector(mockedState)).toEqual(CocktailsReducer);
  });

  it('should select the cocktails state', () => {
    const cocktails: Cocktails = [{ title: 'test', thumbnail: 'test', ingredients: 'test' }];
    const CocktailsReducer: CocktailsState = { cocktails, loading: false, error: false };
    const mockedState = {
      CocktailsReducer,
    };

    expect(cocktailsSelector(mockedState)).toEqual(cocktails);
  });

  it('should select the loading state', () => {
    const cocktails: Cocktails = [];
    const CocktailsReducer: CocktailsState = { cocktails, loading: false, error: false };
    const mockedState = {
      CocktailsReducer,
    };

    expect(loadingSelector(mockedState)).toEqual(false);
  });

  it('should select the loading error', () => {
    const cocktails: Cocktails = [];
    const CocktailsReducer: CocktailsState = { cocktails, loading: false, error: false };
    const mockedState = {
      CocktailsReducer,
    };

    expect(loadingSelector(mockedState)).toEqual(false);
  });
});
