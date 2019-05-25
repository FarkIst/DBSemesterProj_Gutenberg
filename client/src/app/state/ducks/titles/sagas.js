import { put, takeEvery, call } from 'redux-saga/effects';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import * as actions from './actions';
import { getTitles } from './services';
import { titleConstants } from './types';

/**
 * Retrieves users
 * [ { Book } ]
 */
function* fetchTitles(action) {
  try {
    yield put(showLoading());
    const data = yield call(getTitles);
    yield put(actions.titlesSuccess(data));
  } catch (e) {
    // yield put(actions.studentsFailure(data(e.message));
  } finally {
    yield put(hideLoading());
  }
}

/**
 * Sets up a list of watchers waiting for request to be dispatched and then calls a matching function
 */
export default function* flowStepSaga() {
  yield takeEvery('TITLES_REQUEST', fetchTitles);
}
