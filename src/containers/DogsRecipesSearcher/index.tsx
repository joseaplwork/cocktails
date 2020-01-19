import { connect, ConnectedProps } from 'react-redux';
import { fetchDogsRecipes } from 'models/dogsRecipes/actions';
import DogsRecipesSearcher from './component';

const mapDispatchToProps = {
  onSearchChange: fetchDogsRecipes,
};

const connector = connect(null, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(DogsRecipesSearcher);
