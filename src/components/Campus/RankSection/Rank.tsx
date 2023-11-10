import * as S from './Rank.style';
import React, { useState } from 'react';
import { Colors } from '../../../styles/colors';
import CampusPopUp from './CampusPopUp';

const Rank = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const rankStyles: React.CSSProperties = {
    backgroundColor: isHovered ? Colors.Background : 'initial',
  };

  const popUpStyles: React.CSSProperties = {
    position: 'absolute', // Set CampusPopUp to absolute positioning
    bottom: '70px',
    left: '0',
    width: '100%',
    zIndex: '9999',
  };

  return (
    <S.Container>
      {isHovered && <CampusPopUp style={popUpStyles} />}
      <S.RankWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <S.RankUnit style={rankStyles}>
          <S.RankNo>
            <h1>1.</h1>
          </S.RankNo>
          <S.CampusName>
            <p>Korea Advanced Institute of Science and Technology</p>
          </S.CampusName>
          <S.CampusScore>
            <h1>1234</h1>
          </S.CampusScore>
        </S.RankUnit>
      </S.RankWrapper>
    </S.Container>
  );
};

export default Rank;
