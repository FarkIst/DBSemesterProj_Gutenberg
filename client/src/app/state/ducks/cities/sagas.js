import { put, takeEvery, call } from 'redux-saga/effects';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import * as actions from './actions';

import { citiesConstants } from './types';

/**
 * Retrieves cities
 * [ { Cities } ]
 */
function* fetchCities(action) {
  //  const data = yield call(getTitles, action.text);
  yield put(actions.titlesSuccess([]));
}

/**
 * Sets up a list of watchers waiting for request to be dispatched and then calls a matching function
 */
export default function* flowStepSaga() {
  yield takeEvery('CITIES_REQUEST', fetchCities);
}
