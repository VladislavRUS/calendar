import React from 'react';
import { Calendar } from './Calendar';
import { Wrapper, CalendarContainer } from './App.styles';

const App = () => (
  <Wrapper>
    <CalendarContainer>
      <Calendar />
    </CalendarContainer>
  </Wrapper>
);

export default App;
