import { connect, ConnectedProps } from 'react-redux';

import { fetchCocktails } from 'models/cocktails';

import SearchBar from './search-bar.component';

const connector = connect(null, {
  onSearchChange: fetchCocktails,
});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SearchBar);
