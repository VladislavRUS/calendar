import styled from 'styled-components';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { TextArea } from 'components/TextArea';

export const StyledInput = styled(Input)`
  width: 100%;
  padding: 3px 5px;
  font-size: 8px;
  line-height: 10px;
`;

export const StyledTextArea = styled(TextArea)`
  width: 100%;
  padding: 3px 5px;
  font-size: 8px;
  line-height: 10px;
`;

export const Wrapper = styled.div`
  width: 126px;
  padding: 9px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 11px rgba(22, 97, 161, 0.11);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  font-size: 8px;
  padding: 5px 7px;
  text-transform: none;
`;
