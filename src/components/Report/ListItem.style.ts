import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
  border-radius: 8px;
  background-color: ${Colors.Tertiary};
  cursor: pointer;

  &.selected {
    border: 1px solid black;
  }
`;
