import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'setup/types';
import * as T from 'models/cocktails/types';
import { cocktailsSelector } from 'models/cocktails/selectors';
import SearchBar from './view';

interface ListState {
  cocktails: T.Cocktails;
}
const mapStateToProps = (state: RootState): ListState => ({
  cocktails: cocktailsSelector(state),
});

const connector = connect(mapStateToProps, {});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SearchBar);
