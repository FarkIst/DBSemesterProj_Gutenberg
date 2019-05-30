import { put, takeEvery, call } from 'redux-saga/effects';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import * as actions from './actions';
import { getCities } from './services';

import { citiesConstants } from './types';

/**
 * Retrieves cities
 * [ { Cities } ]
 */
function* fetchCities(action) {
  console.log('inside try catch');
  try {
    yield put(showLoading());
    const response = yield call(getCities, action.title);
    const data = yield response.json();
    yield put(actions.citiesSuccess(data));
  } catch (e) {
    yield put(actions.citiesFailure(e.message));
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
