import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div<{ focused: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 16px;

  background: ${(props) => (props.focused ? Colors.Tertiary : Colors.White)};
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  cursor: pointer;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const RecentAnswerWrapper = styled.div``;
