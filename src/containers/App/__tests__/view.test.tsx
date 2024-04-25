import React from 'react';
import { render } from '@testing-library/react';

import App from '../view';

jest.mock('containers/SearchBar/SearchBar');
jest.mock('containers/List/List');

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

  it('should render `List` and `SearchBar` containers', () => {
    const { queryByTestId } = render(<App onEmitAppStarted={mockOnEmitAppStarted} />);
    const List = queryByTestId('List');
    const SearchBar = queryByTestId('SearchBar');

    expect(SearchBar).toBeTruthy();
    expect(List).toBeTruthy();
  });
});
