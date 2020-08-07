import React from 'react';
import { StyledInput } from './Input.styles';

type Props = React.HTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => <StyledInput {...props} />;

export default Input;
