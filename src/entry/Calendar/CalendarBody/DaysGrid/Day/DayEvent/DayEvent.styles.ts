import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #2591ed;
  padding: 2px 3px;
  min-width: 0;
  cursor: pointer;
  font-size: 8px;
  line-height: 10px;
  color: #ffffff;
`;

export const Time = styled.div`
  font-weight: bold;
  margin-right: 4px;
`;

export const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
