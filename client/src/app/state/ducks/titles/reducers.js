import { titleConstants } from './types';
import { updateObject } from '../../../shared/helpers/objectHelper';

/**
 * Sets the initial state in the store before it is set by a successful action
 */
const initialState = { books: [] };

/**
 * Dispatch request is being processed
 * @return initial state and updating is set to true
 */
const titlesRequest = (state, action) =>
  updateObject(state, { books: [], updating: true });

/**
 * Action for successful users dispatch
 * No exceptions were caught during the dispatch
 * @return the existing state and the fetched list of users updating completed and is set to false
 */
const titlesSuccess = (state, action) =>
  updateObject(state, { books: action.books, updating: false });

/**
 * Exception was caught during dispatch
 * @return the existing state, error is set to true and updating set to false
 */
const titlesFailure = (state, action) =>
  updateObject(state, { titles: [], error: true, updating: false });

/**
 * Sends data to the store according to which action is called
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case titleConstants.TITLES_REQUEST:
      return titlesRequest(state, action);
    case titleConstants.TITLES_SUCCESS:
      return titlesSuccess(state, action);
    case titleConstants.TITLES_FAILURE:
      return titlesFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
