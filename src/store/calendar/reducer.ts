import { CalendarActionTypes, CalendarState } from './types';
import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';

type RootAction = ActionType<typeof actions>;

const now = new Date();

const initialState: CalendarState = {
  now: now.getTime(),
  year: now.getFullYear(),
  month: now.getMonth(),
};

export const calendarReducer = createReducer<CalendarState, RootAction>(initialState)
  .handleType(CalendarActionTypes.SET_MONTH, (state, action) => ({ ...state, month: action.payload.month }))
  .handleType(CalendarActionTypes.SET_YEAR, (state, action) => ({ ...state, year: action.payload.year }));
