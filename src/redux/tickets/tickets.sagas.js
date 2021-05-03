import { takeEvery, put, call } from "redux-saga/effects";
import { addTickets } from "./tickets.actions";

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

export function* fetchTicketsAsync(action) {
  yield console.log(action);
  try {
    yield call(delay, 1500);
    const searchId = yield fetch("https://front-test.beta.aviasales.ru/search")
      .then((response) => response.json())
      .then((json) => json.searchId);

    const tickets = yield fetch(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    )
      .then((response) => response.json())
      .then((json) => json.tickets);

    console.log("LOL");
    yield put(addTickets(tickets));
  } catch (e) {}
}
export function* fetchTicketsStart() {
  yield takeEvery("TICKETS_FETCH_START", fetchTicketsAsync);
}
