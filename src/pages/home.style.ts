import { styled } from 'styled-components';
import { Colors } from '../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
  height: 100%;
  padding: 78px 70px;

  background-color: ${Colors.White};
`;
