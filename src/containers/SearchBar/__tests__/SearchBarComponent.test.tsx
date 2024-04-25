import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchBar from '../SearchBarComponent';

describe('SearchBar component', () => {
  const mockOnSearchChange = jest.fn();

  beforeEach(() => {
    mockOnSearchChange.mockReset();
  });

  it('should render basic view', () => {
    render(<SearchBar onSearchChange={mockOnSearchChange} />);

    const component = document.querySelector('.c-cocktails-search-bar');

    expect(component).toBeInTheDocument();
  });

  it('should render basic view with input', () => {
    render(<SearchBar onSearchChange={mockOnSearchChange} />);

    const input = document.querySelector('input');

    expect(input).not.toBeNull();
  });

  it('should call `onSearchChange` on key press if input value has more than 3 characters', () => {
    const component = render(<SearchBar onSearchChange={mockOnSearchChange} />);
    const inputElement = component.container.querySelector('input');

    if (inputElement) {
      inputElement.value = 'garlic';
      fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 });
    }

    expect(mockOnSearchChange).toHaveBeenCalled();
  });
});
