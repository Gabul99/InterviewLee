import { styled } from 'styled-components';
import { Colors } from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Podium = styled.div`
  display: inline-flex;
  align-items: flex-end;
  gap: 60px;
  flex-shrink: 0;
  top: 120px;
`;

export const PodiumUnit = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CampusLogoContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export const CampusLogo = styled.img`
  width: 100%;
  height: 100%;
`;

export const Rank = styled.div`
  display: flex;
  border-radius: 10px;
  width: 100px;
  justify-content: center;
  background-color: ${Colors.Secondary};
  h1 {
    color: ${Colors.Highlight};
    font-family: Outfit;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const FirstPlace = styled(Rank)`
  height: 420px;
`;

export const SecondPlace = styled(Rank)`
  height: 280px;
`;

export const ThirdPlace = styled(Rank)`
  height: 150px;
`;
