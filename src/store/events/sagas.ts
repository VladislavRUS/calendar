import { fork, all, takeEvery, select, put } from 'redux-saga/effects';
import { EventsActionTypes } from 'store/events/types';
import { closeCreateEventModalAction, createEventAction, setEventsActions } from 'store/events/actions';
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

  yield put(setEventsActions(newEvents));
  AppStorage.save(AppStorage.ITEMS.EVENTS, newEvents);

  yield put(closeCreateEventModalAction());
}

const watchers = [
  fork(function* watchCreateEvent() {
    yield takeEvery(EventsActionTypes.CREATE_EVENT, handleCreateEvent);
  }),
];

function* eventsSaga() {
  yield all(watchers);
}

export { eventsSaga };
