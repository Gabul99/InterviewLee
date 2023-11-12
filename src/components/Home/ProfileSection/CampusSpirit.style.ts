import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  width: 460px;
  padding: 12px 16px;

  border-radius: 20px;
  background: #f2f7ff;

  p {
    color: var(--Blue, #0b409c);
    text-align: center;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const CampusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  width: 100%;
  height: 210px;
  padding: 20px 4px;

  border-radius: 10px;
  background: var(--White, #fff);

  h3 {
    color: #0b409c;

    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  span {
    color: #10316b;

    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    color: #0b409c;

    text-align: right;
    font-family: Outfit;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-self: flex-end;
  }
`;
