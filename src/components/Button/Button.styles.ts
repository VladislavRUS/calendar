import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ variant: string; color: string }>`
  padding: 10px 15px;
  margin: 0;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;

  ${(props) =>
    props.variant === 'contained' &&
    css`
      background-color: ${props.color};
    `}

  ${(props) =>
    props.variant === 'text' &&
    css`
      color: ${props.color};
      font-size: 14px;
      text-transform: uppercase;
    `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
