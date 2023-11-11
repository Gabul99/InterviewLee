import { styled } from 'styled-components';

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

      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 40px;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 24px;
  background: var(--White, #fff);

  color: #000;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150.023%; /* 21.003px */
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 280px;
`;