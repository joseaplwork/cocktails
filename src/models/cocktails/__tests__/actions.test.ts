import { emitFetchCocktailsError, fetchCocktails, fetchCocktailsSuccess } from '../actions';
import { actionTypes as at } from '../constants';

describe('cocktails - actions', () => {
  it('should return the correct object for action `emitFetchCocktailsError`', () => {
    const expected = {
      type: at.FETCH_COCKTAILS_ERROR,
    };

    expect(emitFetchCocktailsError()).toEqual(expected);
  });

  it('should return the correct object for action `fetchCocktails`', () => {
    const query = 'garlic';
    const expected = {
      type: at.FETCH_COCKTAILS,
      payload: { query },
    };

    expect(fetchCocktails(query)).toEqual(expected);
  });

  it('should return the correct object for action `fetchCocktailsSuccess`', () => {
    const json = {
      drinks: [],
    };
    const expected = {
      type: at.FETCH_COCKTAILS_SUCCESS,
      payload: { json },
    };

    expect(fetchCocktailsSuccess(json)).toEqual(expected);
  });
});
