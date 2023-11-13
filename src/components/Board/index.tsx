import QuestionList from './QuestionList';
import * as S from './index.style';
import Feedback from './Feedback';
import { useQuestionContext } from '../../context/Question';

const Board: React.FC = () => {
  const { selectedAnswerId } = useQuestionContext();

  return <S.Container>{selectedAnswerId === null ? <QuestionList /> : <Feedback />}</S.Container>;
};

export default Board;
