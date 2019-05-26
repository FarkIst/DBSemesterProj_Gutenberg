import { put, takeEvery, call } from 'redux-saga/effects';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import * as actions from './actions';

import { citiesConstants } from './types';

/**
 * Retrieves cities
 * [ { Cities } ]
 */
function* fetchCities(action) {
  try {
    yield put(showLoading());
    //  const data = yield call(getTitles);
    yield put(actions.titlesSuccess([]));
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
  yield takeEvery('CITIES_REQUEST', fetchCities);
}
