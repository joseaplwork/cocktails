import { put, call } from 'redux-saga/effects';

import { CocktailsResponse } from '../types';
import { fetchCocktailsSaga, fetchCocktailsApi } from '../sagas';
import { fetchCocktails, fetchCocktailsSuccess } from '../actions';

describe('Cocktails - saga', () => {
  it('should call to the api and return the response to the store', () => {
    const query = 'garlic';
    const data: CocktailsResponse = {
      drinks: [],
    };
    const action = fetchCocktails(query);
    const gen = fetchCocktailsSaga(action);

    expect(gen.next().value).toEqual(call(fetchCocktailsApi, query));
    expect(gen.next(data).value).toEqual(put(fetchCocktailsSuccess(data as CocktailsResponse)));
  });
});
