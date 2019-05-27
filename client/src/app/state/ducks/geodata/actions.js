import { geoConstants } from './types';

/**
 * action called upon request api call
 */
export const geoRequest = () => ({
  type: geoConstants.GEO_REQUEST,
});

/**
 * action called up successful api call
 * @param [ { GEODATA } ]
 * @return [ { GEODATA } ]
 */
export const geoSuccess = geodata => ({
  type: geoConstants.GEO_SUCCESS,
  geodata,
});

/**
 * action called upon exception returned upon API call
 * @param Error
 * @return Error
 */
export const geoFailure = err => ({
  type: geoConstants.GEO_FAILURE,
  error: err,
});
