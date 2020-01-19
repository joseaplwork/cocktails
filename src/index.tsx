import { Provider } from 'react-redux';
import React from 'react';
import store from './setup/store';
import ReactDOM from 'react-dom';
import AppConnected from './containers/App';
import './index.scss';

const Init: React.FC = () => {
  return (
    <Provider store={store}>
      <AppConnected />
    </Provider>
  );
};

ReactDOM.render(<Init />, document.getElementById('root'));
