import React from 'react';
import { Wrapper, HeaderWrapper } from './Calendar.styles';
import { CalendarHeader } from './CalendarHeader';
import { CalendarBody } from './CalendarBody';

const Calendar = () => (
  <Wrapper>
    <HeaderWrapper>
      <CalendarHeader />
    </HeaderWrapper>
    <CalendarBody />
  </Wrapper>
);

export default Calendar;
