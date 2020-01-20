import React from 'react';
import { render } from '@testing-library/react';
import App from '../component';

jest.mock('containers/DogsRecipesSearcher');
jest.mock('containers/DogsRecipesList');

describe('App - container', () => {
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

  it('should render `DogsRecipesList` and `DogsRecipesSearcher` containers', () => {
    const { queryByTestId } = render(<App onEmitAppStarted={mockOnEmitAppStarted} />);
    const DogsRecipesList = queryByTestId('DogsRecipesList');
    const DogsRecipesSearcher = queryByTestId('DogsRecipesSearcher');

    expect(DogsRecipesSearcher).toBeTruthy();
    expect(DogsRecipesList).toBeTruthy();
  });
});
