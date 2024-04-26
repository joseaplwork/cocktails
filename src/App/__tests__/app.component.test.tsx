import { render, screen } from '@testing-library/react';

import App from '../app.component';

jest.mock('containers/SearchBar/search-bar.container.tsx');
jest.mock('containers/List/list.container.tsx');

describe('App component', () => {
  it('should render `List` and `SearchBar` containers', () => {
    render(<App />);

    expect(screen.getByTestId('List')).toBeTruthy();
    expect(screen.getByTestId('SearchBar')).toBeTruthy();
  });
});
