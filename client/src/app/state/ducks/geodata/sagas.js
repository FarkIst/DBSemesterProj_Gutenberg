import { put, takeEvery, call } from 'redux-saga/effects';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import * as actions from './actions';
import { getBooks } from './services';

import { geoConstants } from './types';

/**
 * Retrieves Geodata
 * [ { Geodata } ]
 */
function* fetchGeodata(action) {
  console.log('inside try catch');
  try {
    yield put(showLoading());
    const response = yield call(getBooks, action.lat, action.lng);
    const data = yield response.json();
    yield put(actions.geoSuccess(data));
  } catch (e) {
    yield put(actions.geoFailure(e.message));
  } finally {
    yield put(hideLoading());
  }
}

/**
 * Sets up a list of watchers waiting for request to be dispatched and then calls a matching function
 */
export default function* geoSaga() {
  yield takeEvery('GEO_REQUEST', fetchGeodata);
}
