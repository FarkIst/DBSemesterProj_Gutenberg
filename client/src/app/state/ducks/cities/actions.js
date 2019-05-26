import { citiesConstants } from './types';

/**
 * action called upon request api call
 */
export const citiesRequest = () => ({
  type: citiesConstants.CITIES_REQUEST,
});

/**
 * action called up successful api call
 * @param [ { CITY } ]
 * @return [ { CITY } ]
 */
export const citiesSuccess = cities => ({
  type: citiesConstants.CITIES_SUCCESS,
  cities,
});

/**
 * action called upon exception returned upon API call
 * @param Error
 * @return Error
 */
export const citiesFailure = err => ({
  type: citiesConstants.TITLES_FAILURE,
  error: err,
});
