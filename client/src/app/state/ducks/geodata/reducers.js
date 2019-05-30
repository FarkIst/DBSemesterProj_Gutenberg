import { geoConstants } from './types';
import { updateObject } from '../../../shared/helpers/objectHelper';

/**
 * Sets the initial state in the store before it is set by a successful action
 */
const initialState = { geodata: [] };

/**
 * Dispatch request is being processed
 * @return initial state and updating is set to true
 */
const geoRequest = (state, action) =>
  updateObject(state, { geodata: [], updating: true });

/**
 * Action for successful users dispatch
 * No exceptions were caught during the dispatch
 * @return the existing state and the fetched list of users updating completed and is set to false
 */
const geoSuccess = (state, action) =>
  updateObject(state, { geodata: action.geodata, updating: false });

/**
 * Exception was caught during dispatch
 * @return the existing state, error is set to true and updating set to false
 */
const geoFailure = (state, action) =>
  updateObject(state, { geodata: [], error: true, updating: false });

/**
 * Sends data to the store according to which action is called
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case geoConstants.GEO_REQUEST:
      return geoRequest(state, action);
    case geoConstants.GEO_SUCCESS:
      return geoSuccess(state, action);
    case geoConstants.GEO_FAILURE:
      return geoFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
