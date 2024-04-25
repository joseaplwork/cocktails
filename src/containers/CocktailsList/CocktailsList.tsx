import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'setup/types';
import * as T from 'models/cocktails/types';
import { cocktailsSelector } from 'models/cocktails/selectors';
import CocktailsSearchBar from './component';

interface CocktailsListState {
  cocktails: T.Cocktails;
}
const mapStateToProps = (state: RootState): CocktailsListState => ({
  cocktails: cocktailsSelector(state),
});

const connector = connect(mapStateToProps, {});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CocktailsSearchBar);
