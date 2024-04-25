import React, { useEffect } from 'react';
import CocktailsSearcher from 'containers/CocktailsSearcher/CocktailsSearcher';
import CocktailsList from 'containers/CocktailsList';
import { PropsFromRedux } from './index';
import './styles.scss';

export default function App({ onEmitAppStarted }: PropsFromRedux): JSX.Element {
  useEffect(() => {
    onEmitAppStarted();
  }, [onEmitAppStarted]);

  return (
    <div className="c-app t-bg--white-smoke">
      <CocktailsSearcher />
      <CocktailsList />
    </div>
  );
}
