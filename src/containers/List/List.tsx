import { connect, ConnectedProps } from 'react-redux';

import { RootState } from 'setup/types';
import { cocktailsSelector, Cocktails } from 'models/cocktails';

import SearchBar from './view';

interface ListState {
  cocktails: Cocktails;
}
const mapStateToProps = (state: RootState): ListState => ({
  cocktails: cocktailsSelector(state),
});

const connector = connect(mapStateToProps, {});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SearchBar);
