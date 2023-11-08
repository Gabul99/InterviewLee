import * as S from './board.style';
import QuestionBoard from '../components/Board';

const Board: React.FC = () => {
  return (
    <S.Container>
      <QuestionBoard />
    </S.Container>
  );
};

export default Board;
