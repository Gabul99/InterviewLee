import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    color: #000;

    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: bold;
    line-height: 24px; /* 75% */
  }

  div.description {
    width: 100%;

    color: #000;

    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 145.833% */
  }
`;

export const QuestionInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 24px;
  border-radius: 16px;
  background: var(--White, #fff);

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: var(--Indigo, #10316b);
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 85.714% */
  }

  div.button-wrapper {
    display: flex;
    justify-content: flex-end;

    width: 100%;
  }
`;

export const Textarea = styled.textarea`
  all: unset;

  width: 100%;
  height: 240px;
  padding: 16px;

  border-radius: 8px;
  background: rgba(0, 0, 0, 0.04);

  box-sizing: border-box;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);

    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:disabled {
    background: transparent;
  }
`;
