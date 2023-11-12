import * as S from './RankTable.style';
import Rank from './Rank';
import { mockCampus } from '../../../api/mocks/campus.mock';

const RankTable: React.FC = () => {
  // Sort mockCampus array based on the 'rank' property
  const sortedCampus = [...mockCampus].sort((a, b) => a.rank - b.rank);
  return (
    <S.Container>
      {sortedCampus.map((campus) => (
        <Rank key={campus.rank} campus_cur={campus} />
      ))}
    </S.Container>
  );
};

export default RankTable;
