import { connect, ConnectedProps } from 'react-redux';

import { fetchCocktails } from 'models/cocktails';

import SearchBar from './SearchBarComponent';

const mapDispatchToProps = {
  onSearchChange: fetchCocktails,
};

const connector = connect(null, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SearchBar);
