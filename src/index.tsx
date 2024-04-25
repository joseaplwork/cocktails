import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import React from 'react';

import store from './setup/store';
import AppConnected from './containers/App';

import './index.scss';

const Init = () => {
  return (
    <Provider store={store}>
      <AppConnected />
    </Provider>
  );
};

const root = createRoot(document.getElementById('root')!);

root.render(<Init />);
