import * as S from './Rank.style';
import React, { useState } from 'react';
import { Colors } from '../../../styles/colors';
import CampusPopUp from './CampusPopUp';
import { Campus } from '../../../models/Common/Campus';

interface RankProps {
  campus_cur: Campus; // Pass the Campus object as a prop
}

const Rank: React.FC<RankProps> = ({ campus_cur }) => {
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
      {isHovered && <CampusPopUp campus={campus_cur} style={popUpStyles} />}
      <S.RankWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <S.RankUnit style={rankStyles}>
          <S.RankNo>
            <h1>{campus_cur.rank}</h1>
          </S.RankNo>
          <S.CampusName>
            <p>{campus_cur.campus}</p>
          </S.CampusName>
          <S.CampusScore>
            <h1>{campus_cur.points}</h1>
          </S.CampusScore>
        </S.RankUnit>
      </S.RankWrapper>
    </S.Container>
  );
};

export default Rank;
