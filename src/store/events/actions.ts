import { action } from 'typesafe-actions';
import { EventsActionTypes, Event, CreateEventFormValues } from './types';

export const openCreateEventModalAction = (createEventDate: number) =>
  action(EventsActionTypes.OPEN_CREATE_EVENT_MODAL, { createEventDate });

export const closeCreateEventModalAction = () => action(EventsActionTypes.CLOSE_CREATE_EVENT_MODAL);

export const createEventAction = (values: CreateEventFormValues) => action(EventsActionTypes.CREATE_EVENT, { values });

export const setEventsActions = (events: Event[]) => action(EventsActionTypes.SET_EVENTS, { events });
