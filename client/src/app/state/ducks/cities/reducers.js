import { citiesConstants } from './types';
import { updateObject } from '../../../shared/helpers/objectHelper';

/**
 * Sets the initial state in the store before it is set by a successful action
 */
const initialState = { citites: [] };

/**
 * Dispatch request is being processed
 * @return initial state and updating is set to true
 */
const citiesRequest = (state, action) =>
  updateObject(state, { cities: [], updating: true });

/**
 * Action for successful users dispatch
 * No exceptions were caught during the dispatch
 * @return the existing state and the fetched list of users updating completed and is set to false
 */
const citiesSuccess = (state, action) =>
  updateObject(state, { cities: action.cities, updating: false });

/**
 * Exception was caught during dispatch
 * @return the existing state, error is set to true and updating set to false
 */
const citiesFailure = (state, action) =>
  updateObject(state, { cities: [], error: true, updating: false });

/**
 * Sends data to the store according to which action is called
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case citiesConstants.TITLES_REQUEST:
      return citiesRequest(state, action);
    case citiesConstants.TITLES_SUCCESS:
      return citiesSuccess(state, action);
    case citiesConstants.TITLES_FAILURE:
      return citiesFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
