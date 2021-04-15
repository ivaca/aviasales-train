import TicketsActionTypes from "./tickets.types";
const INITIAL_STATE = { data: [] };
const ticketsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TicketsActionTypes.ADD_TICKETS:
      return {
        ...state,
        data: action.payload,
      };
    case TicketsActionTypes.TICKETS_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case TicketsActionTypes.TICKETS_FETCH_START:
      return {
        ...state,
      };
    case TicketsActionTypes.TICKETS_FETCH_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
