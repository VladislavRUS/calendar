import React from 'react';
import { Wrapper, Time, Title } from 'entry/Calendar/CalendarBody/DaysGrid/Day/DayEvent/DayEvent.styles';
import { Event } from 'store/events/types';

type Props = {
  event: Event;
};

const DayEvent: React.FC<Props> = ({ event }) => {
  return (
    <Wrapper>
      <Time>{event.time}</Time>
      <Title title={event.title}>{event.title}</Title>
    </Wrapper>
  );
};

export default DayEvent;
