import { action } from 'typesafe-actions';
import { EventsActionTypes, Event, EventFormValues } from './types';

export const openCreateEventModalAction = (createEventDate: number) =>
  action(EventsActionTypes.OPEN_CREATE_EVENT_MODAL, { createEventDate });

export const closeCreateEventModalAction = () => action(EventsActionTypes.CLOSE_CREATE_EVENT_MODAL);

export const createEventAction = (values: EventFormValues) => action(EventsActionTypes.CREATE_EVENT, { values });

export const setEventsAction = (events: Event[]) => action(EventsActionTypes.SET_EVENTS, { events });

export const updateEventAction = (eventId: string, values: EventFormValues) =>
  action(EventsActionTypes.UPDATE_EVENT, { eventId, values });

export const deleteEventsAction = (eventIds: string[]) => action(EventsActionTypes.DELETE_EVENTS, { eventIds });
