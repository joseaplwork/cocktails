import { render } from '@testing-library/react';

import App from '../component';

jest.mock('containers/SearchBar/container');
jest.mock('containers/List/container');

describe('App component', () => {
  it('should render basic view', () => {
    render(<App />);

    const component = document.querySelector('.c-app');

    expect(component).toBeInTheDocument();
  });

  it('should render `List` and `SearchBar` containers', () => {
    const { queryByTestId } = render(<App />);
    const List = queryByTestId('List');
    const SearchBar = queryByTestId('SearchBar');

    expect(SearchBar).toBeTruthy();
    expect(List).toBeTruthy();
  });
});
