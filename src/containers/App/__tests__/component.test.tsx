import React from 'react';
import { render } from '@testing-library/react';
import App from '../component';

jest.mock('containers/CocktailsSearchBar/CocktailsSearchBar');
jest.mock('containers/CocktailsList/CocktailsList');

describe('App component', () => {
  const mockOnEmitAppStarted = jest.fn();

  it('should render basic view', () => {
    render(<App onEmitAppStarted={mockOnEmitAppStarted} />);

    const component = document.querySelector('.c-app');

    expect(component).toBeInTheDocument();
  });

  it('should call onEmitAppStarted when is mounted', () => {
    render(<App onEmitAppStarted={mockOnEmitAppStarted} />);

    expect(mockOnEmitAppStarted).toHaveBeenCalled();
  });

  it('should render `CocktailsList` and `CocktailsSearchBar` containers', () => {
    const { queryByTestId } = render(<App onEmitAppStarted={mockOnEmitAppStarted} />);
    const CocktailsList = queryByTestId('CocktailsList');
    const CocktailsSearchBar = queryByTestId('CocktailsSearchBar');

    expect(CocktailsSearchBar).toBeTruthy();
    expect(CocktailsList).toBeTruthy();
  });
});
