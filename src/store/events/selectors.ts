import { ApplicationState } from 'store/index';
import { createSelector } from 'reselect';
import isSameMonth from 'date-fns/isSameMonth';
import set from 'date-fns/set';

export const isCreateEventModalOpenedSelector = (state: ApplicationState) => state.events.isCreateEventModalOpened;
export const createEventDateSelector = (state: ApplicationState) => state.events.createEventDate;
export const eventsSelector = (state: ApplicationState) => state.events.events;

export const monthEventsSelector = (month: number) =>
  createSelector([eventsSelector], (events) => {
    const monthDate = set(new Date(), { month });

    return events.filter((event) => isSameMonth(event.date, monthDate));
  });
