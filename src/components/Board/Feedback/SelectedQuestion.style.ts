import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  min-height: 56px;

  h2 {
    color: #0b409c;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
`;

export const QuestionDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  p {
    color: #000;

    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;

  width: fit-content;

  border-radius: 12px;
  border: 1px solid var(--Indigo, #10316b);
  background: var(--Light-Blue, #f2f7ff);
`;
