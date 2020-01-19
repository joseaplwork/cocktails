import React, { useEffect } from 'react';
import DogsRecipesSearcher from 'containers/DogsRecipesSearcher';
import DogsRecipesList from 'containers/DogsRecipesList';
import { PropsFromRedux } from './index';
import './styles.scss';

export default function App({ onEmitAppStarted }: PropsFromRedux): JSX.Element {
  useEffect(() => {
    onEmitAppStarted();
  }, [onEmitAppStarted]);

  return (
    <div className="c-app t-bg--white-smoke">
      <DogsRecipesSearcher />
      <DogsRecipesList />
    </div>
  );
}
