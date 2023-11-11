import QuestionList from './QuestionList';
import * as S from './index.style';
import Feedback from './Feedback';
import { useQuestionContext } from '../../context/Question';

const Board: React.FC = () => {
  const { selectedQuestionId } = useQuestionContext();

  return <S.Container>{selectedQuestionId === null ? <QuestionList /> : <Feedback />}</S.Container>;
};

export default Board;
