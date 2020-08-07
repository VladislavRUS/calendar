import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25 },
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled(motion.div).attrs({
  initial: { y: 100 },
  animate: { y: 0 },
  exit: { y: 100 },
  transition: { duration: 0.25 },
})<{ maxWidth: number }>`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.maxWidth}px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-right: 30px;
`;

export const Title = styled.div`
  font-size: 24px;
`;

export const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
