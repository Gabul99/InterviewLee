import * as S from './Podium.style';
import KAIST from '../../../assets/KAIST.png';
import SNU from '../../../assets/SNU.png';
import MIT from '../../../assets/MIT.png';
import { Campus } from '../../../models/Common/Campus';
import university from '../../../assets/university.png';

interface Props {
  campus: Campus[];
}

const CampusNames = [KAIST, MIT, SNU, university];

const Podium = ({ campus }: Props) => {
  const sortedCampus = campus.sort((a, b) => b.point - a.point);

  const getIdx = (name: string) => {
    switch (name) {
      case 'Korea Advanced Institute of Science and Technology':
        return 0;
      case 'Seoul National University':
        return 2;
      default:
        return 4;
    }
  };

  return (
    <S.Container>
      <S.Podium>
        <S.PodiumUnit>
          <S.CampusLogoContainer>
            <S.CampusLogo src={CampusNames[getIdx(sortedCampus[1].name)]} />
          </S.CampusLogoContainer>
          <S.SecondPlace>
            <h1>2</h1>
          </S.SecondPlace>
        </S.PodiumUnit>
        <S.PodiumUnit>
          <S.CampusLogoContainer>
            <S.CampusLogo src={CampusNames[getIdx(sortedCampus[0].name)]} />
          </S.CampusLogoContainer>
          <S.FirstPlace>
            <h1>1</h1>
          </S.FirstPlace>
        </S.PodiumUnit>
        <S.PodiumUnit>
          <S.CampusLogoContainer>
            <S.CampusLogo src={CampusNames[getIdx(sortedCampus[2].name)]} />
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
