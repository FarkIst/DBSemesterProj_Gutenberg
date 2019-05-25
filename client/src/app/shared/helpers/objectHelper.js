/**
 * Helper function to add props to an object
 */
export const updateObject = (oldObj, updatedProps) => ({
  ...oldObj,
  ...updatedProps,
});

export const updateFilterArray = (oldObj, filterData) => ({
  ...oldObj,
  filterData:
    oldObj.filterData.length < 1
      ? filterData
      : Object.assign({}, oldObj.filterData, filterData),
});
