import * as S from './RankTable.style';
import Rank from './Rank';
import { mockQuestions } from '../../../api/mocks/question.mock';

const RankTable: React.FC = () => {
  return (
    <S.Container>
      <Rank />
      <Rank />
      <Rank />
      <Rank />
      <Rank />
      <Rank />
      <Rank />
    </S.Container>
  );
};

export default RankTable;
