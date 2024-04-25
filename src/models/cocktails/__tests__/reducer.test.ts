import searcherReducer, { initialState } from '../reducer';
import { fetchCocktailsSuccess } from '../actions';
import { CocktailsState } from '../types';

describe('Cocktails - reducer', () => {
  let state: CocktailsState;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    const expected = state;

    expect(searcherReducer(state, { type: 'test' })).toEqual(expected);
  });

  it('should update the state when action with type `FETCH_COCKTAILS_SUCCESS` is called', () => {
    const Cocktails = [{ title: 'test', thumbnail: 'test', ingredients: 'test', href: 'test' }];
    const expected = { Cocktails };
    const json = {
      title: 'test',
      version: 1,
      href: 'test',
      results: Cocktails,
    };

    expect(searcherReducer(state, fetchCocktailsSuccess(json))).toEqual(expected);
  });
});
