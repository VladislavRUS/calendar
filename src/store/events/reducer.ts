import { EventsActionTypes, EventsState } from 'store/events/types';
import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { AppStorage } from 'utils/Storage';

type RootAction = ActionType<typeof actions>;

const initialState: EventsState = {
  events: AppStorage.get(AppStorage.ITEMS.EVENTS, []),
  isCreateEventModalOpened: false,
  createEventDate: null,
};

export const eventsReducer = createReducer<EventsState, RootAction>(initialState)
  .handleType(EventsActionTypes.OPEN_CREATE_EVENT_MODAL, (state, action) => ({
    ...state,
    isCreateEventModalOpened: true,
    createEventDate: action.payload.createEventDate,
  }))
  .handleType(EventsActionTypes.CLOSE_CREATE_EVENT_MODAL, (state) => ({
    ...state,
    isCreateEventModalOpened: false,
    createEventDate: null,
  }))
  .handleType(EventsActionTypes.SET_EVENTS, (state, action) => ({
    ...state,
    events: action.payload.events,
  }));
