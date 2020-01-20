import { emitFetchDogsRecipesFinish, fetchDogsRecipes, fetchDogsRecipesSuccess } from '../actions';
import { actionTypes as at } from '../constants';

describe('dogsRepices - actions', () => {
  it('should return the correct object for action `emitFetchDogsRecipesFinish`', () => {
    const expected = {
      type: at.EMIT_FETCH_DOGS_RECIPES_FINISH,
    };

    expect(emitFetchDogsRecipesFinish()).toEqual(expected);
  });

  it('should return the correct object for action `fetchDogsRecipes`', () => {
    const query = 'garlic';
    const expected = {
      type: at.FETCH_DOGS_RECIPES,
      payload: { query },
    };

    expect(fetchDogsRecipes(query)).toEqual(expected);
  });

  it('should return the correct object for action `fetchDogsRecipesSuccess`', () => {
    const json = {
      title: 'test',
      version: 1,
      href: 'test',
      results: [],
    };
    const expected = {
      type: at.FETCH_DOGS_RECIPES_SUCCESS,
      payload: { json },
    };

    expect(fetchDogsRecipesSuccess(json)).toEqual(expected);
  });
});
