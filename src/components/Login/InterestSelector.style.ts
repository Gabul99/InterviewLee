import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.12);
`;

export const Tag = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 4px 8px;
  border-radius: 13px;
  color: ${Colors.Primary};
  border: 1px solid ${Colors.Secondary};
  cursor: pointer;

  &.selected {
    color: ${Colors.White};
    background-color: ${Colors.Secondary};
  }
`;
