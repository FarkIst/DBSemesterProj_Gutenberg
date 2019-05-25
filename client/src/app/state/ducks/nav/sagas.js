import { push } from 'connected-react-router';
import { put, call } from 'redux-saga/effects';
import * as actions from './actions';

function* navTitles(action) {
  try {
    yield put(push('/booktitles'));
  } catch (e) {
    return;
  } finally {
    yield put(hideLoading());
  }
}

/**
 * Sets up a list of watchers waiting for request to be dispatched and then calls a matching function
 */
export default function* flowStepSaga() {
  yield takeEvery('NAV_TITLES', navTitles);
}
