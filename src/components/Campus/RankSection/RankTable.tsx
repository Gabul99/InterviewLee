import * as S from './RankTable.style';
import Rank from './Rank';
import { Campus } from '../../../models/Common/Campus';

interface Props {
  campus: Campus[];
}

const RankTable = ({ campus }: Props) => {
  const sortedCampus = campus.sort((a, b) => b.point - a.point);
  return (
    <S.Container>
      {sortedCampus.map((campus, idx) => (
        <Rank key={campus.name} campus_cur={campus} rank={idx + 1} />
      ))}
    </S.Container>
  );
};

export default RankTable;
