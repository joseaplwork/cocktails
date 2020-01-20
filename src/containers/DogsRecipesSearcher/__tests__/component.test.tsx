import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DogsRecipesSeacher from '../component';

describe('App - container', () => {
  const mockOnSearchChange = jest.fn();

  beforeEach(() => {
    mockOnSearchChange.mockReset();
  });

  it('should render basic view', () => {
    render(<DogsRecipesSeacher onSearchChange={mockOnSearchChange} />);

    const component = document.querySelector('.c-dogs-recipes-searcher');

    expect(component).toBeInTheDocument();
  });

  it('should render basic view with input', () => {
    render(<DogsRecipesSeacher onSearchChange={mockOnSearchChange} />);

    const input = document.querySelector('input');

    expect(input).not.toBeNull();
  });

  it('should not call `onSearchChange` on key press if input value has no more than 3 characters', () => {
    const component = render(<DogsRecipesSeacher onSearchChange={mockOnSearchChange} />);
    const inputElement = component.container.querySelector('input');

    if (inputElement) {
      fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 });
    }

    expect(mockOnSearchChange).not.toHaveBeenCalled();
  });

  it('should call `onSearchChange` on key press if input value has more than 3 characters', () => {
    const component = render(<DogsRecipesSeacher onSearchChange={mockOnSearchChange} />);
    const inputElement = component.container.querySelector('input');

    if (inputElement) {
      inputElement.value = 'garlic';
      fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 });
    }

    expect(mockOnSearchChange).toHaveBeenCalled();
  });
});
