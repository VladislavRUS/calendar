import { fork, all, takeEvery, select, put } from 'redux-saga/effects';
import { EventsActionTypes } from 'store/events/types';
import {
  closeCreateEventModalAction,
  createEventAction,
  deleteEventsAction,
  setEventsAction,
  updateEventAction,
} from 'store/events/actions';
import { createEventDateSelector, eventsSelector } from 'store/events/selectors';
import { Event } from './types';
import shortid from 'shortid';
import { AppStorage } from 'utils/Storage';

function* handleCreateEvent(action: ReturnType<typeof createEventAction>) {
  const { values } = action.payload;
  const createEventDate: ReturnType<typeof createEventDateSelector> = yield select(createEventDateSelector);

  const newEvent: Event = { id: shortid.generate(), date: createEventDate, ...values };

  const events: ReturnType<typeof eventsSelector> = yield select(eventsSelector);

  const newEvents = [...events, newEvent];

  yield put(setEventsAction(newEvents));
  AppStorage.save(AppStorage.ITEMS.EVENTS, newEvents);

  yield put(closeCreateEventModalAction());
}

function* handleUpdateEvent(action: ReturnType<typeof updateEventAction>) {
  const { eventId, values } = action.payload;
  const events: ReturnType<typeof eventsSelector> = yield select(eventsSelector);

  const newEvents = events.map((event) => {
    if (event.id === eventId) {
      return { ...event, ...values };
    }

    return event;
  });

  yield put(setEventsAction(newEvents));
  AppStorage.save(AppStorage.ITEMS.EVENTS, newEvents);
}

function* handleDeleteEvents(action: ReturnType<typeof deleteEventsAction>) {
  const { eventIds } = action.payload;
  const events: ReturnType<typeof eventsSelector> = yield select(eventsSelector);
  const newEvents = events.filter((event) => eventIds.indexOf(event.id) === -1);

  yield put(setEventsAction(newEvents));
  AppStorage.save(AppStorage.ITEMS.EVENTS, newEvents);
}

const watchers = [
  fork(function* watchCreateEvent() {
    yield takeEvery(EventsActionTypes.CREATE_EVENT, handleCreateEvent);
  }),
  fork(function* watchUpdateEvent() {
    yield takeEvery(EventsActionTypes.UPDATE_EVENT, handleUpdateEvent);
  }),
  fork(function* watchDeleteEvents() {
    yield takeEvery(EventsActionTypes.DELETE_EVENTS, handleDeleteEvents);
  }),
];

function* eventsSaga() {
  yield all(watchers);
}

export { eventsSaga };
