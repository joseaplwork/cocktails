import React, { useEffect } from 'react';
import SearchBar from 'containers/SearchBar/SearchBar';
import List from 'containers/List';
import { PropsFromRedux } from './index';
import './styles.scss';

export default function App({ onEmitAppStarted }: PropsFromRedux): JSX.Element {
  useEffect(() => {
    onEmitAppStarted();
  }, [onEmitAppStarted]);

  return (
    <div className="c-app u-bg--white-smoke">
      <SearchBar />
      <List />
    </div>
  );
}
