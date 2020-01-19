import React from 'react';
import SearchIcon from 'components/SearchIcon';
import './styles.scss';

interface Props {
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function InputSearch({ onKeyPress }: Props): JSX.Element {
  return (
    <div className="c-input-search">
      <SearchIcon size="1em" className="c-input-search__icon" />
      <input type="text" onKeyPress={onKeyPress} className="c-input-search__input" />
    </div>
  );
}
