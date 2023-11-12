import * as S from './CampusSpirit.style';
import Kaist from '../../../assets/KAIST.png';

const CampusSpirit: React.FC = () => {
  return (
    <S.Container>
      <p>Campus Spirit!</p>
      <S.CampusWrapper>
        <h3>
          Korea Advanced Institute of
          <br />
          Science and Technology
        </h3>
        <img src={Kaist} alt="KAIST" />
      </S.CampusWrapper>
      <S.Row>
        <span>This week:</span>
        <p>1st</p>
      </S.Row>
    </S.Container>
  );
};

export default CampusSpirit;
