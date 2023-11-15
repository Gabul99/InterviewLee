import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';
import CampusPopUpBackground from '../../../assets/CampusPopUp.png';

export const CampusPopUp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: url(${CampusPopUpBackground}) no-repeat;
  background-size: auto 100%;
  background-position: center;
  gap: 150px;
  height: 300px;
`;

export const CampusPopUpLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 150px;
`;

export const CampusLogoContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export const CampusLogo = styled.img`
  weight: 100%;
  height: 100%;
`;

export const CampusName = styled.h1`
  text-align: center;
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CampusPoints = styled.h3`
  text-align: center;
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CampusPopUpRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PointCategoryRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const PointCategoryDescription = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const PointCategory = styled.p`
  text-align: right;
  font-family: Inter;
  font-size: 20px;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
`;
