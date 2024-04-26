import searchBarReducer, { initialState } from '../reducer';
import { fetchCocktailsSuccess } from '../actions';
import { CocktailsState } from '../types';

describe('Cocktails - reducer', () => {
  let state: CocktailsState;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    const expected = state;

    expect(searchBarReducer(state, { type: 'test' })).toEqual(expected);
  });

  it('should update the state when action with type `FETCH_COCKTAILS_SUCCESS` is called', () => {
    const cocktails = [{ idDrink: 'test', strDrink: 'test', strDrinkThumb: 'test', strIngredient1: 'test' }];
    const expected = {
      cocktails: [{ ingredients: 'test', thumbnail: 'test', title: 'test' }],
      loading: false,
      error: false,
    };
    const json = {
      drinks: cocktails,
    };

    expect(searchBarReducer(state, fetchCocktailsSuccess(json))).toEqual(expected);
  });
});
