import FilterActionTypes from "./filter.types";

const INITIAL_STATE = { filter: [] };
const ticketsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case FilterActionTypes.GET_FILTER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
