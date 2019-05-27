import { authordataConstants } from './types';

/**
 * action called upon request api call
 */
export const authordataRequest = () => ({
  type: authordataConstants.AUTHORDATA_REQUEST,
});

/**
 * action called up successful api call
 * @param [ { AUTHORDATA } ]
 * @return [ { AUTHORDATA } ]
 */
export const authordataSuccess = authordata => ({
  type: authordataConstants.AUTHORDATA_SUCCESS,
  authordata,
});

/**
 * action called upon exception returned upon API call
 * @param Error
 * @return Error
 */
export const authordataFailure = err => ({
  type: authordataConstants.AUTHORDATA_FAILURE,
  error: err,
});
