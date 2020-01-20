import searcherReducer, { initialState } from '../reducer';
import { fetchDogsRecipesSuccess } from '../actions';
import { DogsRecipesState } from '../types';

describe('dogsRecipes - reducer', () => {
  let state: DogsRecipesState;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    const expected = state;

    expect(searcherReducer(state, { type: 'test' })).toEqual(expected);
  });

  it('should update the state when action with type `FETCH_DOGS_RECIPES_SUCCESS` is called', () => {
    const dogsRecipes = [{ title: 'test', thumbnail: 'test', ingredients: 'test', href: 'test' }];
    const expected = { dogsRecipes };
    const json = {
      title: 'test',
      version: 1,
      href: 'test',
      results: dogsRecipes,
    };

    expect(searcherReducer(state, fetchDogsRecipesSuccess(json))).toEqual(expected);
  });
});
