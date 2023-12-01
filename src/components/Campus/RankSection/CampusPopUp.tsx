import * as S from './CampusPopUp.style';
import React, { useState } from 'react';
import { Colors } from '../../../styles/colors';
import KAIST from '../../../assets/KAIST.png';
import MIT from '../../../assets/MIT.png';
import SNU from '../../../assets/SNU.png';
import university from '../../../assets/university.png';
import { Campus } from '../../../models/Common/Campus';

interface CampusPopUpProps {
  campus: Campus;
  style?: React.CSSProperties;
}

const CampusNames = [KAIST, MIT, SNU, university];

const CampusPopUp: React.FC<CampusPopUpProps> = ({ campus, style }) => {
  const logoIndex = (() => {
    switch (campus.name) {
      case 'Korea Advanced Institute of Science and Technology':
        return 0;
      case 'Seoul National University':
        return 2;
      default:
        return 4;
    }
  })();
  return (
    <S.CampusPopUp style={style}>
      <S.CampusPopUpLeft>
        <S.CampusLogoContainer>
          <S.CampusLogo src={CampusNames[logoIndex]} alt={campus.name} />
        </S.CampusLogoContainer>
        <S.CampusName>
          <h1>{campus.name}</h1>
        </S.CampusName>
        <S.CampusPoints>
          <h3>{campus.point} points</h3>
        </S.CampusPoints>
      </S.CampusPopUpLeft>
      <S.CampusPopUpRight>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>Number of Total Users:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>{campus.userCount}</p>
          </S.PointCategory>
        </S.PointCategoryRow>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>Number of Questions:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>{campus.questionCount}</p>
          </S.PointCategory>
        </S.PointCategoryRow>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>Number of Answer:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>{campus.answerCount} </p>
          </S.PointCategory>
        </S.PointCategoryRow>
      </S.CampusPopUpRight>
    </S.CampusPopUp>
  );
};

export default CampusPopUp;
