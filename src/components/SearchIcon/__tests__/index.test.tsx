import React from 'react';
import { render } from '@testing-library/react';

import SearchIcon from '../SearchIcon';

describe('SearchIcon component', () => {
  it('should render basic view', () => {
    render(<SearchIcon size="100" />);

    const component = document.querySelector('svg');

    expect(component).toBeInTheDocument();
  });

  it('should render basic view with class', () => {
    render(<SearchIcon size="100" className="test-class" />);

    const component = document.querySelector('.test-class');

    expect(component).toBeInTheDocument();
  });
});
