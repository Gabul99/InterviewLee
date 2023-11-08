import { styled } from 'styled-components';
import { Colors } from '../styles/colors';

export const Container = styled.div`
  flex-grow: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 104px;
  padding: 40px;

  font-size: 32px;
  font-weight: 700;

  flex-shrink: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const Body = styled.body`
  width: 100%;
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: row;
`;

export const LeftListArea = styled.div`
  width: 360px;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-shrink: 0;
  overflow-y: auto;

  .title {
    font-size: 32px;
    font-weight: 500;
  }
`;

export const Contents = styled.div`
  flex-grow: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 16px;

  background-color: ${Colors.Tertiary};

  .empty {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    line-height: 32px;
  }
`;
