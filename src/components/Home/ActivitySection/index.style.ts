import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;

  h2 {
    width: 100%;
    height: 56px;

    color: #000;

    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-y: scroll;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;

  width: 100%;
`;

export const Content = styled.div`
  width: calc(50% - 40px);
`;
