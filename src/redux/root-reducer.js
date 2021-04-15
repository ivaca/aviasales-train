import { combineReducers } from "redux";

import ticketsReducer from "./tickets/tickets.reducer";
import filterReducer from "./filter/filter.reducer";
const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filter: filterReducer,
});

export default rootReducer;
