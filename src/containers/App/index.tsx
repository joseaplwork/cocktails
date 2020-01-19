import { connect, ConnectedProps } from 'react-redux';
import { emitAppStarted } from 'models/core/actions';
import App from './component';

const mapDispatchToProps = {
  onEmitAppStarted: emitAppStarted,
};

const connector = connect(null, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
