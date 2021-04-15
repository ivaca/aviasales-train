import { createSelector } from "reselect";

const selectFilter = (state) => state.filter;

export const selectFilterData = createSelector(
  [selectFilter],
  (filter) => filter.filter
);
