import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'setup/types';
import * as T from 'models/dogsRecipes/types';
import { dogsRecipesSelector } from 'models/dogsRecipes/selectors';
import DogsRecipesSearcher from './component';

interface DogsRecipesListState {
  dogsRecipes: T.DogsRecipies;
}
const mapStateToProps = (state: RootState): DogsRecipesListState => ({
  dogsRecipes: dogsRecipesSelector(state),
});

const connector = connect(mapStateToProps, {});

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(DogsRecipesSearcher);
