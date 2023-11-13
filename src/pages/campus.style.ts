import { styled } from 'styled-components';
import { Colors } from '../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1;
  height: 100%;
  padding: 40px;

  overflow-y: auto;

  background-color: ${Colors.White};
`;
