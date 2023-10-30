import { styled } from 'styled-components';
import { Colors } from '../../styles/colors';

export const main = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 76px;

  width: 264px;
  height: 100%;

  padding: 116px 0 76px;

  background-color: ${Colors.Tertiary};
`;

export const logo = styled.h3`
  font-size: 28px;
  font-weight: bold;
`;

export const list = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

export const item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 21px;

  width: 210px;
  height: 47px;
  padding: 0 20px 0 10px;
  border-radius: 100px;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &.selected {
    color: ${Colors.White};
    background-color: ${Colors.Secondary};
  }
`;
