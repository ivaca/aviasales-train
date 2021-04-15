import FilterActionTypes from "./filter.types";

export const changeFilter = (filter) => ({
  type: FilterActionTypes.CHANGE_FILTER,
  payload: filter,
});

export const getFilter = () => ({
  type: FilterActionTypes.GET_FILTER,
});
