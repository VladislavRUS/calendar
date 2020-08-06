import { ApplicationState } from '../index';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import set from 'date-fns/set';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import getDay from 'date-fns/getDay';

export const yearSelector = (state: ApplicationState) => state.calendar.year;
export const monthSelector = (state: ApplicationState) => state.calendar.month;
export const daysSelector = (state: ApplicationState) => {
  const month = monthSelector(state);
  const year = yearSelector(state);

  const date = set(new Date(), { month, year });

  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const interval = eachDayOfInterval({ start, end });

  const startDay = getDay(start);

  if (startDay > 0) {
    const prevMonthDate = set(new Date(), { month: month - 1, year });

    const prevMonthEnd = endOfMonth(prevMonthDate);
    const prevMonthStart = set(prevMonthDate, { date: prevMonthEnd.getDate() - startDay + 1 });

    const prevMonthInterval = eachDayOfInterval({ start: prevMonthStart, end: prevMonthEnd });

    interval.unshift(...prevMonthInterval);
  }

  return interval;
};
