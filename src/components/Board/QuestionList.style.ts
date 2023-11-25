import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  height: 40px;

  h1 {
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 75% */
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyText = styled.p`
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 500;
`;
