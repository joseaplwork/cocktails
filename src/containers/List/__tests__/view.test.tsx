import React from 'react';
import { render } from '@testing-library/react';
import { Cocktails } from 'models/cocktails/types';
import List from '../view';

describe('List view', () => {
  it('should render basic view with', () => {
    const mockCocktails: Cocktails = [];

    render(<List cocktails={mockCocktails} />);

    const component = document.querySelector('.c-cocktails-list');

    expect(component).toBeInTheDocument();
  });

  it('should render basic view with no items in the list', () => {
    const mockCocktails: Cocktails = [];

    render(<List cocktails={mockCocktails} />);

    const cards = document.querySelectorAll('.c-cocktails-list__card');

    expect(cards.length).toEqual(0);
  });

  it('should render items in the list', () => {
    const mockCocktails: Cocktails = [
      { ingredients: 'test', thumbnail: 'test', title: 'test' },
      { ingredients: 'test2', thumbnail: 'test2', title: 'test2' },
    ];

    render(<List cocktails={mockCocktails} />);

    const cards = document.querySelectorAll('.c-cocktails-list__card');

    expect(cards.length).toEqual(2);
  });

  it('should render `has lactose` ribbon', () => {
    const mockCocktails: Cocktails = [{ ingredients: 'cheese', thumbnail: 'test', title: 'test' }];

    render(<List cocktails={mockCocktails} />);

    const ribbonElement = document.querySelector('.c-cocktails-list__ribbon');

    expect(ribbonElement).toBeInTheDocument();
  });

  it('should render the right structure', () => {
    const mockCocktails: Cocktails = [{ ingredients: 'cheese', thumbnail: 'test', title: 'test' }];

    render(<List cocktails={mockCocktails} />);

    const imgElement = document.querySelector('img');
    const ribbonElement = document.querySelector('.c-cocktails-list__ribbon');
    const pElements = document.querySelectorAll('p');

    expect(imgElement).toBeInTheDocument();
    expect(ribbonElement).toBeInTheDocument();
    expect(pElements.length).toEqual(2);
  });
});
