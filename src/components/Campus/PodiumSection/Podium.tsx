import * as S from './Podium.style';
import KAIST from '../../../assets/KAIST.png';
import SNU from '../../../assets/SNU.png';
import MIT from '../../../assets/MIT.png';

const Podium: React.FC = () => {
  return (
    <S.Container>
      <S.Podium>
        <S.PodiumUnit>
          <S.CampusLogoContainer>
            <S.CampusLogo src={MIT} />
          </S.CampusLogoContainer>
          <S.SecondPlace>
            <h1>2</h1>
          </S.SecondPlace>
        </S.PodiumUnit>
        <S.PodiumUnit>
          <S.CampusLogoContainer>
            <S.CampusLogo src={KAIST} />
          </S.CampusLogoContainer>
          <S.FirstPlace>
            <h1>1</h1>
          </S.FirstPlace>
        </S.PodiumUnit>
        <S.PodiumUnit>
          <S.CampusLogoContainer>
            <S.CampusLogo src={SNU} />
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
