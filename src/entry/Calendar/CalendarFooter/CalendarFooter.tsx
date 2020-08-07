import React from 'react';
import { ApplicationState } from 'store';
import { bindActionCreators, Dispatch } from 'redux';
import { deleteEventsAction } from 'store/events/actions';
import { monthSelector } from 'store/calendar/selectors';
import { Wrapper, EventsNumber, StyledButton } from './CalendarFooter.styles';
import { monthEventsSelect } from 'store/events/selectors';
import { MONTH_NAMES } from 'constants/monthNames';
import { connect } from 'react-redux';

const mapStateToProps = (state: ApplicationState) => {
  const month = monthSelector(state);

  return {
    month,
    events: monthEventsSelect(month)(state),
  };
};

type StateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      deleteEvents: deleteEventsAction,
    },
    dispatch
  );

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type Props = StateProps & DispatchProps;

const CalendarFooter: React.FC<Props> = ({ month, events, deleteEvents }) => {
  const onDeleteAll = () => deleteEvents(events.map((event) => event.id));

  return (
    <Wrapper>
      <EventsNumber>
        {events.length > 0 ? events.length : 'No'} events on {MONTH_NAMES[month]} -{' '}
      </EventsNumber>
      <StyledButton variant="text" color="#2591ED" onClick={onDeleteAll}>
        Remove All
      </StyledButton>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarFooter);
