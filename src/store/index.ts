import { combineReducers } from 'redux';
import { CalendarState } from './calendar/types';
import { calendarReducer } from './calendar/reducer';
import { all, fork } from 'redux-saga/effects';
import { calendarSaga } from 'store/calendar/sagas';
import { EventsState } from 'store/events/types';
import { eventsReducer } from 'store/events/reducer';
import { eventsSaga } from 'store/events/sagas';

export type ApplicationState = {
  calendar: CalendarState;
  events: EventsState;
};

export const createRootReducer = () =>
  combineReducers({
    calendar: calendarReducer,
    events: eventsReducer,
  });

export function* rootSaga() {
  yield all([fork(calendarSaga), fork(eventsSaga)]);
}
