import React, { useEffect } from 'react';
import CocktailsSearchBar from 'containers/CocktailsSearchBar/CocktailsSearchBar';
import CocktailsList from 'containers/CocktailsList';
import { PropsFromRedux } from './index';
import './styles.scss';

export default function App({ onEmitAppStarted }: PropsFromRedux): JSX.Element {
  useEffect(() => {
    onEmitAppStarted();
  }, [onEmitAppStarted]);

  return (
    <div className="c-app u-bg--white-smoke">
      <CocktailsSearchBar />
      <CocktailsList />
    </div>
  );
}
