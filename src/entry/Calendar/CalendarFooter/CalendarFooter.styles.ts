import styled from 'styled-components';
import { Button } from 'components/Button';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const EventsNumber = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #b0afaf;
  margin-bottom: 2px;
`;

export const StyledButton = styled(Button)`
  font-size: 12px;
  line-height: 15px;
  text-transform: none;
  padding: 4px;
`;
