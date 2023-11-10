import * as S from './CampusPopUp.style';
import React, { useState } from 'react';
import { Colors } from '../../../styles/colors';
import KAIST_Icon from '../../../assets/KAIST.png';

const CampusPopUp: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <S.CampusPopUp style={style}>
      <S.CampusPopUpLeft>
        <S.CampusLogoContainer>
          <S.CampusLogo src={KAIST_Icon} />
        </S.CampusLogoContainer>
        <S.CampusName>
          <h1>KAIST</h1>
        </S.CampusName>
        <S.CampusPoints>
          <h3>1234 points</h3>
        </S.CampusPoints>
      </S.CampusPopUpLeft>
      <S.CampusPopUpRight>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>No. of Total Users:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>4354</p>
          </S.PointCategory>
        </S.PointCategoryRow>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>No. of Active Users:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>435</p>
          </S.PointCategory>
        </S.PointCategoryRow>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>No. of Questions:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>3</p>
          </S.PointCategory>
        </S.PointCategoryRow>
        <S.PointCategoryRow>
          <S.PointCategoryDescription>
            <p>No. of Responses:</p>
          </S.PointCategoryDescription>
          <S.PointCategory>
            <p>45</p>
          </S.PointCategory>
        </S.PointCategoryRow>
      </S.CampusPopUpRight>
    </S.CampusPopUp>
  );
};

export default CampusPopUp;
