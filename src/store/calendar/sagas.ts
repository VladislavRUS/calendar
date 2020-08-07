import { all, fork, takeEvery, select, put } from 'redux-saga/effects';
import { CalendarActionTypes } from 'store/calendar/types';
import { monthSelector, nowSelector, yearSelector } from 'store/calendar/selectors';
import { setMonthAction, setYearAction } from 'store/calendar/actions';
import { MonthNumbers } from 'constants/MonthNumbers';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';

function* handleOnPrevMonth() {
  const month: ReturnType<typeof monthSelector> = yield select(monthSelector);

  const prevMonth = month - 1;

  if (prevMonth >= MonthNumbers.January) {
    yield put(setMonthAction(prevMonth));
  } else {
    yield put(setMonthAction(MonthNumbers.December));

    const year: ReturnType<typeof yearSelector> = yield select(yearSelector);
    const prevYear = year - 1;

    yield put(setYearAction(prevYear));
  }
}

function* handleOnNextMonth() {
  const month: ReturnType<typeof monthSelector> = yield select(monthSelector);

  const nextMonth = month + 1;

  if (nextMonth <= MonthNumbers.December) {
    yield put(setMonthAction(nextMonth));
  } else {
    yield put(setMonthAction(MonthNumbers.January));

    const year: ReturnType<typeof yearSelector> = yield select(yearSelector);
    const nextYear = year + 1;

    yield put(setYearAction(nextYear));
  }
}

function* handleOnToday() {
  const now: ReturnType<typeof nowSelector> = yield select(nowSelector);

  yield put(setMonthAction(getMonth(now)));
  yield put(setYearAction(getYear(now)));
}

const watchers = [
  fork(function* watchOnPrevMonth() {
    yield takeEvery(CalendarActionTypes.ON_PREV_MONTH, handleOnPrevMonth);
  }),
  fork(function* watchOnPrevMonth() {
    yield takeEvery(CalendarActionTypes.ON_NEXT_MONTH, handleOnNextMonth);
  }),
  fork(function* watchOnToday() {
    yield takeEvery(CalendarActionTypes.ON_TODAY, handleOnToday);
  }),
];

function* calendarSaga() {
  yield all(watchers);
}

export { calendarSaga };
