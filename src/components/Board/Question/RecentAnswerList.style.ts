import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;

    color: #000;

    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
`;

export const AnswerWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 8px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  p.author {
    color: #000;

    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }

  span.answer {
    color: #000;

    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;
