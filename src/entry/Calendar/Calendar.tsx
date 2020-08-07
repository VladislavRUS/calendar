import React from 'react';
import { Wrapper, HeaderWrapper, BodyWrapper } from './Calendar.styles';
import { CalendarHeader } from './CalendarHeader';
import { CalendarBody } from './CalendarBody';
import { CreateEventModal } from './CreateEventModal';
import { CalendarFooter } from './CalendarFooter';

const Calendar = () => (
  <Wrapper>
    <HeaderWrapper>
      <CalendarHeader />
    </HeaderWrapper>
    <BodyWrapper>
      <CalendarBody />
    </BodyWrapper>
    <CalendarFooter />
    <CreateEventModal />
  </Wrapper>
);

export default Calendar;
