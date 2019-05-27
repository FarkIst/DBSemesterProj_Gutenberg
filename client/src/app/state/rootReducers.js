import { combineReducers } from 'redux';
import books from './ducks/titles/reducers';
import cities from './ducks/cities/reducers';
import authordata from './ducks/cities/reducers';
import geodata from './ducks/geodata/reducers';

export default combineReducers({ books, cities, authordata, geodata });
