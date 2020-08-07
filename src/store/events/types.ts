export type EventsState = {
  events: Event[];
  isCreateEventModalOpened: boolean;
  createEventDate: number | null;
};

export enum EventsActionTypes {
  OPEN_CREATE_EVENT_MODAL = '@@events/OPEN_CREATE_EVENT_MODAL',
  CLOSE_CREATE_EVENT_MODAL = '@@events/CLOSE_CREATE_EVENT_MODAL',
  CREATE_EVENT = '@@events/CREATE_EVENT',
  SET_EVENTS = '@@events/SET_EVENTS',
}

export type Event = {
  id: string;
  time: string;
  date: number;
  title: string;
  description: string;
};

export type CreateEventFormValues = Omit<Event, 'id'>;
