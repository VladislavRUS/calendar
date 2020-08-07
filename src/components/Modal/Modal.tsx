import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Wrapper, Header, Title, CloseButton, ModalActions } from './Modal.styles';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { AnimatePresence } from 'framer-motion';

type Props = {
  isOpened: boolean;
  onClose: () => void;
  title: string;
  maxWidth?: number;
};

const Modal: React.FC<Props> & { Actions: React.FC } = ({ isOpened, title, maxWidth = 600, onClose, children }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpened && (
        <Overlay>
          <Wrapper maxWidth={maxWidth}>
            <Header>
              <Title>{title}</Title>
              <CloseButton onClick={onClose}>
                <CloseIcon />
              </CloseButton>
            </Header>
            {children}
          </Wrapper>
        </Overlay>
      )}
    </AnimatePresence>,
    document.body
  );
};

const Actions: React.FC = ({ children }) => <ModalActions>{children}</ModalActions>;

Modal.Actions = Actions;

export default Modal;
