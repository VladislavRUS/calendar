import React from 'react';
import { Wrapper, HeaderWrapper } from './Calendar.styles';
import { CalendarHeader } from './CalendarHeader';
import { CalendarBody } from './CalendarBody';
import { CreateEventModal } from './CreateEventModal';

const Calendar = () => (
  <Wrapper>
    <HeaderWrapper>
      <CalendarHeader />
    </HeaderWrapper>
    <CalendarBody />
    <CreateEventModal />
  </Wrapper>
);

export default Calendar;
