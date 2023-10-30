import { styled } from 'styled-components';
import { Colors } from '../../styles/colors';

export const footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 98px;

  font-size: 50px;
  font-weight: bold;
  color: ${Colors.White};

  background-color: ${Colors.Primary};
`;
