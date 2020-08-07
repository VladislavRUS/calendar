import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 39px 48px;

  @media screen and (max-width: 600px) {
    padding: 10px 15px;
  }
`;

export const CalendarContainer = styled.div`
  max-width: 650px;
  flex-grow: 1;
`;
