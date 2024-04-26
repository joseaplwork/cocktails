import { connect, ConnectedProps } from 'react-redux';

import { RootState } from 'setup/types';
import { cocktailsSelector, loadingSelector, errorSelector } from 'models/cocktails';

import SearchBar from './component';

const connector = connect(
  (state: RootState) => ({
    cocktails: cocktailsSelector(state),
    loading: loadingSelector(state),
    error: errorSelector(state),
  }),
  {},
);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SearchBar);
