import React from 'react';
import { Wrapper, Name } from './DaysNames.styles';
import { SHORT_DAY_NAMES } from 'constants/shortDayNames';

const DaysNames = () => {
  return (
    <Wrapper>
      {SHORT_DAY_NAMES.map((name) => (
        <Name key={name}>{name}</Name>
      ))}
    </Wrapper>
  );
};

export default DaysNames;
