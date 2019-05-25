import { all, fork } from 'redux-saga/effects';

import titles from './ducks/titles/sagas';

/**;
 * Calls into action all the saga watcher
 */
export default function* rootSaga() {
  yield all([fork(titles)]);
}
