import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  h2 {
    color: var(--Yellow, #ffe867);
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
`;

export const Textarea = styled.textarea<{ confirmed: boolean }>`
  all: unset;

  display: flex;
  height: 120px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;

  border-radius: 8px;
  background: rgba(0, 0, 0, 0.04);

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);

    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  &:disabled {
    background: transparent;
  }
`;
