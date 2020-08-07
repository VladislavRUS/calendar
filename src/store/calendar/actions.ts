import { action } from 'typesafe-actions';
import { CalendarActionTypes } from 'store/calendar/types';

export const setMonthAction = (month: number) => action(CalendarActionTypes.SET_MONTH, { month });
export const setYearAction = (year: number) => action(CalendarActionTypes.SET_YEAR, { year });
export const onTodayAction = () => action(CalendarActionTypes.ON_TODAY);
export const onPrevMonthAction = () => action(CalendarActionTypes.ON_PREV_MONTH);
export const onNextMonthAction = () => action(CalendarActionTypes.ON_NEXT_MONTH);
