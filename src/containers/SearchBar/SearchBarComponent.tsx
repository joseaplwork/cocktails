import React from 'react';

import InputSearch from 'components/InputSearch';

import { PropsFromRedux } from './SearchBarContainer';

import './styles.scss';

export default function SearchBar({ onSearchChange }: PropsFromRedux): JSX.Element {
  const onInputSearchChange = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    const { value } = evt.currentTarget;

    if (evt.keyCode === 13 || evt.charCode === 13) {
      onSearchChange(encodeURIComponent(value).replace(/%2C/g, ','));
    }
  };

  return (
    <div className="c-cocktails-search-bar u-bg--primary u-padding--top-md u-padding--bottom u-padding--left u-padding--right">
      <div className="o-container">
        <InputSearch placeholder="Type your message and press Enter to continue" onKeyPress={onInputSearchChange} />
      </div>
    </div>
  );
}