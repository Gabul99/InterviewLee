import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  .title {
    min-width: 170px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const PositionFilterItem = styled.div`
  width: fit-content;
  padding: 4px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 1);
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;

  &.selected {
    background-color: rgba(0, 0, 0, 1);
    color: ${Colors.White};
  }
`;

export const TagFilterItem = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: fit-content;

  border-radius: 12px;
  border: 1px solid var(--Indigo, #10316b);
  background: var(--Light-Blue, #f2f7ff);
  color: ${Colors.Secondary};
  font-size: 12px;

  &.selected {
    background-color: ${Colors.Secondary};
    color: white;
  }
`;
