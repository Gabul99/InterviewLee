import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ProfileImageContainer = styled.div`
  width: 156px;
  height: 156px;
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
  justify-content: space-between;
  gap: 10px;

  h2.name {
    color: #000;

    font-family: Outfit;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p.user-id {
    color: #0b409c;

    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2.name {
    color: #000;

    font-family: Outfit;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p.user-id {
    color: #0b409c;

    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ProfileActvities = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  padding: 8px 16px;
  margin-top: 8px;
  border-radius: 4px;
  background: rgba(255, 232, 103, 0.3);

  div.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span {
      color: #10316b;

      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      &:last-child {
        font-weight: 700;
      }
    }
  }
`;

export const PreferWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const PositionFilterItem = styled.div`
  width: fit-content;
  padding: 4px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 1);
  font-size: 14px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 1);
  color: ${Colors.White};
`;
