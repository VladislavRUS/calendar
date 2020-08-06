import React from 'react';
import { ApplicationState } from 'store';
import { daysSelector } from 'store/calendar/selectors';
import { connect } from 'react-redux';
import { Wrapper } from './DaysGrid.styles';
import { Day } from './Day';

const mapStateToProps = (state: ApplicationState) => ({
  days: daysSelector(state),
});

type StateProps = ReturnType<typeof mapStateToProps>;

type Props = StateProps;

const DaysGrid: React.FC<Props> = ({ days }) => {
  return (
    <Wrapper>
      {days.map((day) => (
        <Day date={day} />
      ))}
    </Wrapper>
  );
};

export default connect(mapStateToProps)(DaysGrid);
