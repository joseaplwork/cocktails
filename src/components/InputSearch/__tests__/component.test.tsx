import { render, fireEvent, screen } from '@testing-library/react';

import InputSearch from '../component';

jest.mock('components/SearchIcon/component.tsx');

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
    const { container } = render(<InputSearch placeholder="" onKeyPress={mockOnKeyPress} />);

    const inputElement = container.querySelector('input');
    const searchIconElement = screen.queryByTestId('SearchIcon');

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
