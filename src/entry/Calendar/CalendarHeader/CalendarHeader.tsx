import React from 'react';
import { Wrapper, Date } from './CalendarHeader.styles';
import { ApplicationState } from 'store';
import { monthSelector, yearSelector } from 'store/calendar/selectors';
import { connect } from 'react-redux';
import { MONTH_NAMES } from 'constants/monthNames';

const mapStateToProps = (state: ApplicationState) => ({
  year: yearSelector(state),
  month: monthSelector(state),
});

type StateProps = ReturnType<typeof mapStateToProps>;

type Props = StateProps;

const CalendarHeader: React.FC<Props> = ({ year, month }) => {
  return (
    <Wrapper>
      <Date>
        {MONTH_NAMES[month]} {year}
      </Date>
    </Wrapper>
  );
};

export default connect(mapStateToProps)(CalendarHeader);
