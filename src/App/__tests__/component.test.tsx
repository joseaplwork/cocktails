import { render, screen } from '@testing-library/react';

import App from '../component';

jest.mock('containers/SearchBar/container.tsx');
jest.mock('containers/List/container.tsx');

describe('App component', () => {
  it('should render `List` and `SearchBar` containers', () => {
    render(<App />);

    expect(screen.getByTestId('List')).toBeTruthy();
    expect(screen.getByTestId('SearchBar')).toBeTruthy();
  });
});
