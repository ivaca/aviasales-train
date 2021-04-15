import { createSelector } from "reselect";

const selectCart = (state) => state.tickets;

export const selectTickets = createSelector([selectCart], (tickets) => {
  return tickets.data === undefined ? [] : tickets.data;
});
