import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const RankWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RankUnit = styled.div`
  display: flex;
  flex-direction: row;
  height: 76px;
  align-items: center;
  gap: 120px;
  border-bottom: 1px solid ${Colors.Secondary};
`;

export const RankNo = styled.h1`
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 75% */
`;

export const CampusName = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CampusScore = styled.h1`
  color: ${Colors.Secondary};
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 75% */
`;
