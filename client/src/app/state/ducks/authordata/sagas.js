import { put, takeEvery, call } from 'redux-saga/effects';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import * as actions from './actions';

import { authordataConstants } from './types';

/**
 * Retrieves Authordata
 * [ { Authordata } ]
 */
function* fetchAuthordata(action) {
  try {
    yield put(showLoading());
    //  const data = yield call(getTitles, action.text);
    yield put(actions.authordataSuccess([]));
  } catch (e) {
    return;
    // yield put(actions.studentsFailure(data(e.message));
  } finally {
    yield put(hideLoading());
  }
}

/**
 * Sets up a list of watchers waiting for request to be dispatched and then calls a matching function
 */
export default function* flowStepSaga() {
  yield takeEvery('AUTHORDATA_REQUEST', fetchAuthordata);
}
