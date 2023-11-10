import * as S from './Title.style';
import InfoIcon from '../../../assets/information.png';
import React, { useState } from 'react';

const Title = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <S.TitleContainer>
      <S.Title>Campus</S.Title>
      <S.HoverContainer>
        <S.HoverDescription>TOP 3 for 4th Week of October!</S.HoverDescription>
        <S.HoverIconWrapper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <S.HoverIconContainer>
            <S.HoverIcon src={InfoIcon} />
            {isHovered && (
              <S.HoverPopUp>
                <S.HoverPopUpText>
                  <p>
                    Your Campus Points are calculated integrating the following
                    factors:
                    <li>
                      Number of questions that made it to the Question Board
                    </li>
                    <li>
                      Quality ratings given with a 5-star quality assessment
                    </li>
                    <li>
                      Number of responses received for questions submitted
                    </li>
                    <li>
                      Number of feedbacks left on other candidates&rsquo
                      responses or feedback requests
                    </li>
                  </p>
                </S.HoverPopUpText>
              </S.HoverPopUp>
            )}
          </S.HoverIconContainer>
        </S.HoverIconWrapper>
      </S.HoverContainer>
    </S.TitleContainer>
  );
};

export default Title;
