import { combineReducers } from 'redux';
import books from './ducks/titles/reducers';
import cities from './ducks/cities/reducers';

export default combineReducers({ books, cities });
