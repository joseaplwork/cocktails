import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputSearch from '../index';

jest.mock('components/SearchIcon/SearchIcon');

describe('App - container', () => {
  const mockOnKeyPress = jest.fn();

  beforeEach(() => {
    mockOnKeyPress.mockClear();
  });

  it('should render basic view', () => {
    render(<InputSearch onKeyPress={mockOnKeyPress} />);

    const component = document.querySelector('.c-input-search');

    expect(component).toBeInTheDocument();
  });

  it('should render an input and an icon', () => {
    const { queryByTestId, container } = render(<InputSearch onKeyPress={mockOnKeyPress} />);

    const inputElement = container.querySelector('input');
    const searchIconElement = queryByTestId('SearchIcon');

    expect(inputElement).toBeInTheDocument();
    expect(searchIconElement).toBeTruthy();
  });

  it('should call onKeyPress event', () => {
    const component = render(<InputSearch onKeyPress={mockOnKeyPress} />);
    const inputElement = component.container.querySelector('input');

    if (inputElement) {
      fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 });
    }

    expect(mockOnKeyPress).toHaveBeenCalled();
  });
});
