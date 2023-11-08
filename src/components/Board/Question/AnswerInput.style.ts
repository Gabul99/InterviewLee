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

  textarea {
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
  }
`;
