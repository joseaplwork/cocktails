import { render, fireEvent, screen } from '@testing-library/react';

import SearchBar from '../component';

describe('SearchBar component', () => {
  const mockOnSearchChange = jest.fn();

  beforeEach(() => {
    mockOnSearchChange.mockReset();
  });

  it('should render input', () => {
    render(<SearchBar onSearchChange={mockOnSearchChange} />);

    expect(screen.getByPlaceholderText('Type your message and press Enter to continue')).not.toBeNull();
  });

  it('should call `onSearchChange` on key press', () => {
    render(<SearchBar onSearchChange={mockOnSearchChange} />);

    const input = screen.getByPlaceholderText('Type your message and press Enter to continue');
    fireEvent.change(input, { target: { value: 'garlic' } });
    fireEvent.keyPress(input, { key: 'Enter', keyCode: 13 });

    expect(mockOnSearchChange).toHaveBeenCalledWith('garlic');
  });
});
