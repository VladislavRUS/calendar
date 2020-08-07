import React from 'react';
import { Wrapper, DateNumber, DateNumberWrapper } from './Day.styles';
import format from 'date-fns/format';
import { ApplicationState } from 'store';
import { dayEventsSelector, monthSelector, nowSelector } from 'store/calendar/selectors';
import { openCreateEventModalAction } from 'store/events/actions';
import { connect } from 'react-redux';
import isSameDay from 'date-fns/isSameDay';
import getMonth from 'date-fns/getMonth';
import { bindActionCreators, Dispatch } from 'redux';
import { DayEvent } from './DayEvent';

const mapStateToProps = (state: ApplicationState, ownProps: OwnProps) => {
  const selectDayEvents = dayEventsSelector(ownProps.date);

  return (state: ApplicationState) => ({
    now: nowSelector(state),
    month: monthSelector(state),
    events: selectDayEvents(state),
  });
};

type StateProps = ReturnType<ReturnType<typeof mapStateToProps>>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      openCreateEventModal: openCreateEventModalAction,
    },
    dispatch
  );

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type OwnProps = {
  date: Date;
};

type Props = OwnProps & StateProps & DispatchProps;

const Day: React.FC<Props> = ({ now, date, month, events, openCreateEventModal }) => {
  const isCurrentDay = isSameDay(now, date);
  const isCurrentMonthDay = getMonth(date) === month;

  const onClick = () => {
    if (events.length === 0) {
      openCreateEventModal(date.getTime());
    }
  };

  return (
    <Wrapper
      isCurrentMonthDay={isCurrentMonthDay}
      isCurrentDay={isCurrentDay}
      onClick={onClick}
      hasEvents={events.length > 0}
      id={date.getTime().toString()}
    >
      <DateNumberWrapper>
        <DateNumber>{format(date, 'd')}</DateNumber>
      </DateNumberWrapper>

      {events.map((event) => (
        <DayEvent key={event.id} event={event} />
      ))}
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Day);
