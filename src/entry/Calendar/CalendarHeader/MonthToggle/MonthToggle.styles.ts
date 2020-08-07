import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Today = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  font-size: 11px;
  color: #000;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Icon = styled.img``;

const Arrow = styled.button`
  padding: 5px;
  margin: 0;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LeftArrow = styled(Arrow)``;
export const RightArrow = styled(Arrow)``;
