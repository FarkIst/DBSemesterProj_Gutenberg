import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { titlesSuccess, titlesFailure } from './actions';
import { getTitles } from './services';
import { titleConstants } from './types';

/**
 * Retrieves users
 * [ { Book } ]
 */
function* fetchTitles(action) {
  console.log(action.text);
  try {
    const response = yield call(getTitles, action.text);
    console.log('outside of fetch call');
    const data = yield response.json();
    console.log(data);
    yield put(titlesSuccess(data));
  } catch (e) {
    yield put(titlesFailure(e.message));
  }
}

/**
 * Sets up a list of watchers waiting for request to be dispatched and then calls a matching function
 */
export default function* flowStepSaga() {
  yield takeEvery('TITLES_REQUEST', fetchTitles);
}
