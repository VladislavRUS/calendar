import React from 'react';
import { StyledLabel } from './FieldLabel.styles';

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

const FieldLabel: React.FC<Props> = ({ children, ...rest }) => <StyledLabel {...rest}>{children}</StyledLabel>;

export default FieldLabel;
