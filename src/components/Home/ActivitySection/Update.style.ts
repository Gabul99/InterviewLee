import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  height: 44px;

  color: #000;

  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ContentTextType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    color: #2e2e2e;

    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  p.highlight {
    color: #10316b;

    font-family: Inter;
    font-size: 16px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
  }
`;
