import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';
import HoverPopUpBackground from '../../../assets/HoverPopUp.png';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 40px;
`;

export const Title = styled.h1`
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 75% */
`;

export const HoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const HoverDescription = styled.p`
  margin-top: 40px;
  display: block;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 12px; /* 100% */
  text-decoration-line: underline;
`;

export const HoverIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HoverIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const HoverIcon = styled.img`
  margin-top: 2px;
  width: 100%;
  height: 100%;
`;

export const HoverPopUp = styled.div`
  z-index: 9999;
  align-items: center;
  margin-left: -107px;
  margin-top: 5px;
  width: 780px;
  height: 202.5px;
  flex-shrink: 0;
  background-image: url(${HoverPopUpBackground});
  background-size: cover;
  background-position: center;
`;

export const HoverPopUpText = styled.p`
  margin-top: 30px;
  margin-left: 24px;
  color: ${Colors.Secondary};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 166.667% */
`;

export const Contribution = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  border-radius: 10px;
  width: fit-content;
  border: 2px solid ${Colors.Secondary};
  padding: 7px;
  margin-left: auto;

  h1 {
    color: ${Colors.Secondary};
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    line-height: normal;
  }
`;
