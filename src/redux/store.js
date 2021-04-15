import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

import createSagaMiddleware from "redux-saga";
import { fetchTicketsStart } from "./tickets/tickets.sagas";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") middlewares.push(logger);

export default createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchTicketsStart);
