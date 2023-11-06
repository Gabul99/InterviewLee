import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div<{ focused: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 16px;

  background: ${(props) => (props.focused ? Colors.Tertiary : Colors.White)};

  cursor: pointer;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const QuestionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const RecentAnswerWrapper = styled.div``;
