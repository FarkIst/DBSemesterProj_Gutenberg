import * as Reselect from 'reselect';
let _createSelector = Reselect.createSelector;

if (process.env.ENV === 'development') {
  const ReselectTools = require('reselect-tools');
  _createSelector = ReselectTools.createSelectorWithDependencies;
}

/**
 * Use this function to create selectors, because it automatically bind to
 * reselect-tools in development
 */
export const createSelector = _createSelector;

/**
 * Register selector with name in reselect tools
 */
export function register(name, selector) {
  if (process.env.ENV === 'development') {
    selector.selectorName = name;
  }

  return selector;
}
