import { all, fork } from 'redux-saga/effects';

import titles from './ducks/titles/sagas';
import cities from './ducks/cities/sagas';
import authordata from './ducks/authordata/sagas';
import geodata from './ducks/geodata/sagas';

/**;
 * Calls into action all the saga watcher
 */
export default function* rootSaga() {
  yield all(
    [fork(titles)],
    [fork(cities)],
    [fork(authordata)],
    [fork(geodata)],
  );
}
