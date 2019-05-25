import { titleConstants } from './types';

/**
 * action called upon request api call
 */
export const titlesRequest = () => ({
  type: titleConstants.TITLES_REQUEST,
});

/**
 * action called up successful api call
 * @param [ { Titles } ]
 * @return [ { Titles } ]
 */
export const titlesSuccess = books => ({
  type: titleConstants.TITLES_SUCCESS,
  books,
});

/**
 * action called upon exception returned upon API call
 * @param Error
 * @return Error
 */
export const titlesFailure = err => ({
  type: titleConstants.TITLES_FAILURE,
  error: err,
});
