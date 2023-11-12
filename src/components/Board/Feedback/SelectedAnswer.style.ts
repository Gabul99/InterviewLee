import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  div.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    height: 31px;

    p {
      color: #000;

      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  height: fit-content;
  gap: 40px;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  flex-grow: 1;
  padding: 24px;
  background: var(--White, #fff);

  color: #000;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150.023%; /* 21.003px */
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 280px;
  gap: 8px;
`;

export const Char = styled.span`
  display: inline;
  color: #000;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &.yellow-selected {
    background-color: ${Colors.Highlight};
  }

  &.yellow-not {
    background-color: #ffe86799;
    cursor: pointer;
  }
`;
