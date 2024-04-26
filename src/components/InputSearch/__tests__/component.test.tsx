import { render, fireEvent, screen } from '@testing-library/react';

import InputSearch from '../component';

describe('InputSearch component', () => {
  const mockOnKeyPress = jest.fn();

  it('should render an input and an icon', () => {
    render(<InputSearch placeholder="lorem ipsum" onKeyPress={mockOnKeyPress} />);

    expect(screen.getByPlaceholderText('lorem ipsum')).toBeInTheDocument();
    expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
  });

  it('should call onKeyPress event', () => {
    render(<InputSearch placeholder="lorem ipsum" onKeyPress={mockOnKeyPress} />);

    fireEvent.keyPress(screen.getByPlaceholderText('lorem ipsum'), { key: 'Enter', keyCode: 13 });

    expect(mockOnKeyPress).toHaveBeenCalled();
  });
});
