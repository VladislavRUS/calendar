import React from 'react';
import { StyledTextarea } from './TextArea.styles';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<Props> = (props) => <StyledTextarea {...props} />;

export default TextArea;
