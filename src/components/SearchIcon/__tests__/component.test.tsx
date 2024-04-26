import { render, screen } from '@testing-library/react';

import SearchIcon from '../component';

describe('SearchIcon component', () => {
  it('should render basic view with class', () => {
    render(<SearchIcon size="100" className="test-class" />);

    expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
  });
});
