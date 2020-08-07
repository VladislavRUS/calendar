import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isCurrentMonthDay: boolean; isCurrentDay: boolean; hasEvents: boolean }>`
  position: relative;
  border: 1px solid #f2f2f2;
  height: 85px;
  padding-top: 6px;

  ${(props) =>
    !props.hasEvents &&
    css`
      &:hover {
        border: 1px solid #2591ed;
      }
    `}

  ${(props) =>
    props.isCurrentDay &&
    css`
      background-color: #e0f1ff;

      ${DateNumber} {
        color: #fff;
        background-color: #2591ed;
        border-radius: 50%;
      }
    `}
  
  ${(props) =>
    !props.isCurrentMonthDay &&
    css`
      pointer-events: none;

      ${DateNumber} {
        opacity: 0.4;
      }
    `}
`;

export const DateNumberWrapper = styled.div`
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const DateNumber = styled.div`
  font-size: 11px;
  color: #6f6e6e;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
`;
