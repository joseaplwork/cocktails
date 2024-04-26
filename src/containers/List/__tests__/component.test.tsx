import { render, screen } from '@testing-library/react';

import { Cocktails } from 'models/cocktails';

import List from '../component';

describe('List component', () => {
  it('should render basic view with no items in the list', () => {
    render(<List cocktails={[]} loading={false} error={false} />);

    expect(screen.queryAllByText('title').length).toEqual(0);
  });

  it('should render items in the list', () => {
    const mockCocktails: Cocktails = [
      { ingredients: 'ingredient', thumbnail: 'test', title: 'title' },
      { ingredients: 'ingredient2', thumbnail: 'test2', title: 'title2' },
    ];

    render(<List cocktails={mockCocktails} loading={false} error={false} />);

    expect(screen.getAllByText(/^title/).length).toEqual(2);
    expect(screen.getAllByText(/^ingredient/).length).toEqual(2);
  });

  it('should render `has lactose` ribbon', () => {
    const mockCocktails: Cocktails = [{ ingredients: 'cheese', thumbnail: 'test', title: 'test' }];

    render(<List cocktails={mockCocktails} loading={false} error={false} />);

    expect(screen.getByText('Has lactose')).toBeInTheDocument();
  });
});
