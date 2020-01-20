import { put, call } from 'redux-saga/effects';
import { DogsRecipesJsonData } from '../types';
import { fetchDogBreedsSaga, fetchDogsRecipesApi } from '../sagas';
import { fetchDogsRecipes, fetchDogsRecipesSuccess, emitFetchDogsRecipesFinish } from '../actions';

describe('dogsRecipes - saga', () => {
  it('should call to the api and return the response to the store', () => {
    const query = 'garlic';
    const data: DogsRecipesJsonData = {
      title: 'test',
      version: 1,
      href: 'test',
      results: [],
    };
    const action = fetchDogsRecipes(query);
    const gen = fetchDogBreedsSaga(action);

    expect(gen.next().value).toEqual(call(fetchDogsRecipesApi, query));
    expect(gen.next(data).value).toEqual(put(fetchDogsRecipesSuccess(data as DogsRecipesJsonData)));
    expect(gen.next().value).toEqual(put(emitFetchDogsRecipesFinish()));
  });
});
