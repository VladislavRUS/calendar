import React from 'react';
import { Wrapper, Number } from './Day.styles';
import format from 'date-fns/format';

type Props = {
  date: Date;
};

const Day: React.FC<Props> = ({ date }) => {
  return (
    <Wrapper>
      <Number>{format(date, 'dd')}</Number>
    </Wrapper>
  );
};

export default Day;
