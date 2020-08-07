export type CalendarState = {
  now: number;
  year: number;
  month: number;
};

export enum CalendarActionTypes {
  SET_MONTH = '@@calendar/SET_MONTH',
  SET_YEAR = '@@calendar/SET_YEAR',
  ON_NEXT_MONTH = '@@calendar/ON_NEXT_MONTH',
  ON_PREV_MONTH = '@@calendar/ON_PREV_MONTH',
  ON_TODAY = '@@calendar/ON_TODAY',
}
