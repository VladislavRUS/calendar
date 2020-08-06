import { combineReducers } from 'redux';
import { CalendarState } from './calendar/types';
import { calendarReducer } from './calendar/reducer';
import { all } from 'redux-saga/effects';

export type ApplicationState = {
  calendar: CalendarState;
};

export const createRootReducer = () =>
  combineReducers({
    calendar: calendarReducer,
  });

export function* rootSaga() {
  yield all([]);
}
