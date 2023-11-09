import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  height: 100vh;
  padding: 40px;

  background-color: var(--Light-Blue, #f2f7ff);
`;
