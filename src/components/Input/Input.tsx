import React from 'react';
import { StyledInput } from './Input.styles';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => <StyledInput {...props} />;

export default Input;
