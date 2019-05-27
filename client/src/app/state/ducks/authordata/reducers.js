import { citiesConstants } from './types';
import { updateObject } from '../../../shared/helpers/objectHelper';

/**
 * Sets the initial state in the store before it is set by a successful action
 */
const initialState = { authordata: [] };

/**
 * Dispatch request is being processed
 * @return initial state and updating is set to true
 */
const authordataRequest = (state, action) =>
  updateObject(state, { authordata: [], updating: true });

/**
 * Action for successful users dispatch
 * No exceptions were caught during the dispatch
 * @return the existing state and the fetched list of users updating completed and is set to false
 */
const authordataSuccess = (state, action) =>
  updateObject(state, { authordata: action.authordata, updating: false });

/**
 * Exception was caught during dispatch
 * @return the existing state, error is set to true and updating set to false
 */
const authordataFailure = (state, action) =>
  updateObject(state, { authordata: [], error: true, updating: false });

/**
 * Sends data to the store according to which action is called
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authordataConstants.AUTHORDATA_REQUEST:
      return authordataRequest(state, action);
    case authordataConstants.AUTHORDATA_SUCCESS:
      return authordataSuccess(state, action);
    case authordataConstants.AUTHORDATA_FAILURE:
      return authordataFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
