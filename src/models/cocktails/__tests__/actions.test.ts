import { fetchCocktailsError, fetchCocktails, fetchCocktailsSuccess } from '../actions';
import { actionTypes as at } from '../constants';

describe('cocktails - actions', () => {
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

  it('should return the correct object for action `fetchCocktailsError`', () => {
    const expected = {
      type: at.FETCH_COCKTAILS_ERROR,
    };

    expect(fetchCocktailsError()).toEqual(expected);
  });
});
