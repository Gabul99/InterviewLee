import { styled } from 'styled-components';
import { Colors } from '../../styles/colors';

export const main = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 76px;

  width: 264px;
  height: 100%;

  padding: 112px 12px 20px;
  flex-shrink: 0;

  background-color: ${Colors.Tertiary};
`;

export const logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  h3 {
    font-size: 28px;
    font-weight: bold;
    color: #0b409c;
  }

  .highlight {
    color: var(--Yellow, #ffe867);
  }
`;

export const list = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  flex-grow: 1;
`;

export const item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 21px;

  width: 210px;
  height: 47px;
  padding: 0 20px 0 10px;
  border-radius: 100px;

  font-size: 16px;
  font-weight: bold;

  color: #1a202c;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: 24px; /* 150% */

  cursor: pointer;

  &.selected {
    color: ${Colors.White};
    background-color: ${Colors.Secondary};
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 100%;

  p {
    color: #4a5568;

    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  width: 100%;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
  }

  div.content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: left;

    width: 164px;

    span.name {
      color: #000;

      font-family: Outfit;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    span {
      color: #0b409c;

      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
