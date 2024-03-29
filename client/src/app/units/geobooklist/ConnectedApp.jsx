import MyApp from './MyApp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const { geodata } = state.geodata;
  return {
    geodata: geodata,
  };
};

const connectedApp = withRouter(connect(mapStateToProps)(MyApp));

export default connectedApp;
