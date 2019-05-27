import MyApp from './MyApp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const { authordata } = state.authordata;
  return {
    authordata: authordata,
  };
};

const connectedApp = withRouter(connect(mapStateToProps)(MyApp));

export default connectedApp;
