import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import InputSearch from '../InputSearch';

jest.mock('components/SearchIcon/SearchIcon');

describe('InputSearch component', () => {
  const mockOnKeyPress = jest.fn();

  beforeEach(() => {
    mockOnKeyPress.mockClear();
  });

  it('should render basic view', () => {
    render(<InputSearch placeholder="" onKeyPress={mockOnKeyPress} />);

    const component = document.querySelector('.c-input-search');

    expect(component).toBeInTheDocument();
  });

  it('should render an input and an icon', () => {
    const { queryByTestId, container } = render(<InputSearch placeholder="" onKeyPress={mockOnKeyPress} />);

    const inputElement = container.querySelector('input');
    const searchIconElement = queryByTestId('SearchIcon');

    expect(inputElement).toBeInTheDocument();
    expect(searchIconElement).toBeTruthy();
  });

  it('should call onKeyPress event', () => {
    const component = render(<InputSearch placeholder="" onKeyPress={mockOnKeyPress} />);
    const inputElement = component.container.querySelector('input');

    if (inputElement) {
      fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 });
    }

    expect(mockOnKeyPress).toHaveBeenCalled();
  });
});
