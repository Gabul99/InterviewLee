import * as S from './Podium.style';
import KAIST_Icon from '../../../assets/KAIST.png';

const Podium: React.FC = () => {
  return (
    <S.Container>
      <S.Podium>
        <S.PodiumUnit>
          <S.CampusLogoContainer>
            <S.CampusLogo src={KAIST_Icon} />
          </S.CampusLogoContainer>
          <S.SecondPlace>
            <h1>2</h1>
          </S.SecondPlace>
        </S.PodiumUnit>
        <S.PodiumUnit>
          <S.CampusLogoContainer>
            <S.CampusLogo src={KAIST_Icon} />
          </S.CampusLogoContainer>
          <S.FirstPlace>
            <h1>1</h1>
          </S.FirstPlace>
        </S.PodiumUnit>
        <S.PodiumUnit>
          <S.CampusLogoContainer>
            <S.CampusLogo src={KAIST_Icon} />
          </S.CampusLogoContainer>
          <S.ThirdPlace>
            <h1>3</h1>
          </S.ThirdPlace>
        </S.PodiumUnit>
      </S.Podium>
    </S.Container>
  );
};

export default Podium;
