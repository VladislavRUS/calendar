import React from 'react';
import { StyledButton } from './Button.styles';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'contained' | 'text';
  color?: string;
};

const Button: React.FC<Props> = ({ variant = 'text', color = '#000', children, ...rest }) => (
  <StyledButton variant={variant} color={color} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
