import { ApplicationState } from 'store/index';

export const isCreateEventModalOpenedSelector = (state: ApplicationState) => state.events.isCreateEventModalOpened;
export const createEventDateSelector = (state: ApplicationState) => state.events.createEventDate;
export const eventsSelector = (state: ApplicationState) => state.events.events;
