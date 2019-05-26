import MyApp from './MyApp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const { cities } = state.cities;
  return {
    cities: cities,
  };
};

const connectedApp = withRouter(connect(mapStateToProps)(MyApp));

export default connectedApp;
