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
  const logoIndex = campus.rank <= 3 ? campus.rank - 1 : CampusNames.indexOf(university);
  return (
    <S.CampusPopUp style={style}>
      <S.CampusPopUpLeft>
        <S.CampusLogoContainer>
          <S.CampusLogo src={CampusNames[logoIndex]} alt={campus.campus} />
        </S.CampusLogoContainer>
        <S.CampusName>
          <h1>{campus.campus}</h1>
        </S.CampusName>
        <S.CampusPoints>
          <h3>{campus.points} points</h3>
        </S.CampusPoints>
      </S.CampusPopUpLeft>
      <S.CampusPopUpRight>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>No. of Total Users:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>{campus.total_user}</p>
          </S.PointCategory>
        </S.PointCategoryRow>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>No. of Active Users:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>{campus.total_active} </p>
          </S.PointCategory>
        </S.PointCategoryRow>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>No. of Questions:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>{campus.question_no}</p>
          </S.PointCategory>
        </S.PointCategoryRow>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>No. of Responses:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>{campus.response_no} </p>
          </S.PointCategory>
        </S.PointCategoryRow>
      </S.CampusPopUpRight>
    </S.CampusPopUp>
  );
};

export default CampusPopUp;
