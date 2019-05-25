import MyApp from './MyApp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const { books } = state.books;
  return {
    books: books,
  };
};

const connectedApp = withRouter(connect(mapStateToProps)(MyApp));

export default connectedApp;
