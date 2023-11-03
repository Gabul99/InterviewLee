import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ProfileImageContainer = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 76px;
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2.name {
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
  }

  p.user-id {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    color: ${Colors.Primary};
  }
`;

export const ProfileActvities = styled.div`
  display: flex;
  flex-direction: column;

  padding: 8px 16px;
  border-radius: 4px;

  background-color: ${Colors.Highlight_30};

  div.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span {
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      color: ${Colors.Primary};

      &:last-child {
        font-weight: 700;
      }
    }
  }
`;
