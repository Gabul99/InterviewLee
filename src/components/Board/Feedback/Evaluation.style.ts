import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  height: 50px;
  margin-top: 32px;

  p {
    color: #000;

    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  width: 100%;
  padding: 24px;

  background: var(--White, #fff);

  color: var(--White, #fff);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150.023%; /* 30.005px */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 16px;
  border-radius: 8px;
  background: var(--Indigo, #10316b);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  flex-grow: 1;

  div.column {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    p {
      color: #000;

      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;

  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid var(--Indigo, #10316b);

  color: var(--Indigo, #10316b);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  cursor: pointer;
`;
