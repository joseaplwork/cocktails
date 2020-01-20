import React from 'react';
import { render } from '@testing-library/react';
import { DogsRecipies } from 'models/dogsRecipes/types';
import DogsRecipesList from '../component';

describe('App - container', () => {
  it('should render basic view with no items in the list', () => {
    const mockDogsRecipes: DogsRecipies = [];

    render(<DogsRecipesList dogsRecipes={mockDogsRecipes} />);

    const component = document.querySelector('.c-dogs-recipes-list');
    const cards = document.querySelectorAll('.c-dogs-recipes-list__card');

    expect(component).toBeInTheDocument();
    expect(cards.length).toEqual(0);
  });

  it('should render items in the list', () => {
    const mockDogsRecipes: DogsRecipies = [
      { ingredients: 'test', thumbnail: 'test', title: 'test', href: 'test' },
      { ingredients: 'test2', thumbnail: 'test2', title: 'test2', href: 'test2' },
    ];

    render(<DogsRecipesList dogsRecipes={mockDogsRecipes} />);

    const cards = document.querySelectorAll('.c-dogs-recipes-list__card');

    expect(cards.length).toEqual(2);
  });

  it('should render `has lactose` ribbon', () => {
    const mockDogsRecipes: DogsRecipies = [{ ingredients: 'cheese', thumbnail: 'test', title: 'test', href: 'test' }];

    render(<DogsRecipesList dogsRecipes={mockDogsRecipes} />);

    const ribbonElement = document.querySelector('.c-dogs-recipes-list__ribbon');

    expect(ribbonElement).toBeInTheDocument();
  });

  it('should render the right structure', () => {
    const mockDogsRecipes: DogsRecipies = [{ ingredients: 'cheese', thumbnail: 'test', title: 'test', href: 'test' }];

    render(<DogsRecipesList dogsRecipes={mockDogsRecipes} />);

    const aElement = document.querySelector('a');
    const imgElement = document.querySelector('img');
    const ribbonElement = document.querySelector('.c-dogs-recipes-list__ribbon');
    const pElements = document.querySelectorAll('p');

    expect(aElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(ribbonElement).toBeInTheDocument();
    expect(pElements.length).toEqual(2);
  });
});
