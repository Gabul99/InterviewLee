import { styled } from 'styled-components';

export const main = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  max-height: 100vh;
`;

export const layout = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;
`;

export const OutletContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 100%;

  overflow-y: scroll;
`;
