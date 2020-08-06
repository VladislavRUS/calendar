import React from 'react';
import { Wrapper, NamesWrapper } from './CalendarBody.styles';
import { DaysNames } from './DaysNames';
import { DaysGrid } from 'entry/Calendar/CalendarBody/DaysGrid';

const CalendarBody = () => (
  <Wrapper>
    <NamesWrapper>
      <DaysNames />
    </NamesWrapper>
    <DaysGrid />
  </Wrapper>
);

export default CalendarBody;
