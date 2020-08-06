import { CalendarState } from './types';
import { createReducer } from 'typesafe-actions';

const now = new Date();

const initialState: CalendarState = {
  year: now.getFullYear(),
  month: now.getMonth(),
};

export const calendarReducer = createReducer(initialState);
