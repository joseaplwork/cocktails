import { emitFetchCocktailsFinish, fetchCocktails, fetchCocktailsSuccess } from '../actions';
import { actionTypes as at } from '../constants';

describe('cocktails - actions', () => {
  it('should return the correct object for action `emitFetchCocktailsFinish`', () => {
    const expected = {
      type: at.EMIT_FETCH_COCKTAILS_FINISH,
    };

    expect(emitFetchCocktailsFinish()).toEqual(expected);
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
      title: 'test',
      version: 1,
      href: 'test',
      results: [],
    };
    const expected = {
      type: at.FETCH_COCKTAILS_SUCCESS,
      payload: { json },
    };

    expect(fetchCocktailsSuccess(json)).toEqual(expected);
  });
});
