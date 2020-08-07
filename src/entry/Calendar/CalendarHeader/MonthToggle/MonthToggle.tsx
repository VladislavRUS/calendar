import React from 'react';
import { Wrapper, Today, Icon, LeftArrow, RightArrow } from './MonthToggle.styles';
import leftArrowIcon from 'assets/icons/left-arrow.svg';
import rightArrowIcon from 'assets/icons/right-arrow.svg';
import { bindActionCreators, Dispatch } from 'redux';
import { onPrevMonthAction, onNextMonthAction, onTodayAction } from 'store/calendar/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onPrevMonth: onPrevMonthAction,
      onNextMonth: onNextMonthAction,
      onToday: onTodayAction,
    },
    dispatch
  );

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type Props = DispatchProps;

const MonthToggle: React.FC<Props> = ({ onPrevMonth, onNextMonth, onToday }) => {
  return (
    <Wrapper>
      <LeftArrow onClick={onPrevMonth}>
        <Icon src={leftArrowIcon} />
      </LeftArrow>
      <Today onClick={onToday}>Today</Today>
      <RightArrow onClick={onNextMonth}>
        <Icon src={rightArrowIcon} />
      </RightArrow>
    </Wrapper>
  );
};

export default connect(null, mapDispatchToProps)(MonthToggle);
