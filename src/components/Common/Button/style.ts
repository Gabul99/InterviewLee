import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';

export const ButtonWrapper = styled.button<{ background: string }>`
  all: unset;

  height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  background: ${(props) => props.background};

  box-sizing: border-box;

  color: ${Colors.White};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */

  cursor: pointer;
`;
