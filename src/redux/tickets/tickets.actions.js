import TicketsActionTypes from "./tickets.types";

export const addTickets = (tickets) => ({
  type: TicketsActionTypes.ADD_TICKETS,
  payload: tickets,
});

export const getTickets = () => ({
  type: TicketsActionTypes.TICKETS_FETCH_START,
});
