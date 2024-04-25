import React from 'react';
import { render } from '@testing-library/react';
import { Cocktails } from 'models/Cocktails/types';
import CocktailsList from '../component';

describe('App - container', () => {
  it('should render basic view with', () => {
    const mockCocktails: Cocktails = [];

    render(<CocktailsList Cocktails={mockCocktails} />);

    const component = document.querySelector('.c-cocktails-list');

    expect(component).toBeInTheDocument();
  });

  it('should render basic view with no items in the list', () => {
    const mockCocktails: Cocktails = [];

    render(<CocktailsList Cocktails={mockCocktails} />);

    const cards = document.querySelectorAll('.c-cocktails-list__card');

    expect(cards.length).toEqual(0);
  });

  it('should render items in the list', () => {
    const mockCocktails: Cocktails = [
      { ingredients: 'test', thumbnail: 'test', title: 'test', href: 'test' },
      { ingredients: 'test2', thumbnail: 'test2', title: 'test2', href: 'test2' },
    ];

    render(<CocktailsList Cocktails={mockCocktails} />);

    const cards = document.querySelectorAll('.c-cocktails-list__card');

    expect(cards.length).toEqual(2);
  });

  it('should render `has lactose` ribbon', () => {
    const mockCocktails: Cocktails = [{ ingredients: 'cheese', thumbnail: 'test', title: 'test', href: 'test' }];

    render(<CocktailsList Cocktails={mockCocktails} />);

    const ribbonElement = document.querySelector('.c-cocktails-list__ribbon');

    expect(ribbonElement).toBeInTheDocument();
  });

  it('should render the right structure', () => {
    const mockCocktails: Cocktails = [{ ingredients: 'cheese', thumbnail: 'test', title: 'test', href: 'test' }];

    render(<CocktailsList Cocktails={mockCocktails} />);

    const aElement = document.querySelector('a');
    const imgElement = document.querySelector('img');
    const ribbonElement = document.querySelector('.c-cocktails-list__ribbon');
    const pElements = document.querySelectorAll('p');

    expect(aElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(ribbonElement).toBeInTheDocument();
    expect(pElements.length).toEqual(2);
  });
});
