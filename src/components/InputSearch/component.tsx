import React from 'react';

import SearchIcon from 'components/SearchIcon';

import './component.scss';

interface Props {
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function InputSearch({ onKeyPress, placeholder }: Props) {
  return (
    <div className="c-input-search">
      <SearchIcon size="1em" className="c-input-search__icon" />
      <input type="text" placeholder={placeholder} onKeyPress={onKeyPress} className="c-input-search__input" />
    </div>
  );
}
