import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import store from './setup/store';
import App from './App';

import './index.scss';

const Init = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const root = createRoot(document.getElementById('root')!);

root.render(<Init />);
