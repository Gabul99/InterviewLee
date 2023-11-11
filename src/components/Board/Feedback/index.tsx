import { mockQuestions } from '../../../api/mocks/question.mock';
import { useQuestionContext } from '../../../context/Question';
import Evaluation from './Evaluation';
import * as S from './index.style';
import SelectedAnswer from './SelectedAnswer';
import SelectedQuestion from './SelectedQuestion';

const Feedback: React.FC = () => {
  const { selectedQuestionId, selectedAnswerId } = useQuestionContext();

  const question = mockQuestions.find((question) => question.id === selectedQuestionId);
  const answer = question ? question.answers.find((answer) => answer.id === selectedAnswerId) : null;

  if (!question) return null;

  return (
    <S.Container>
      <SelectedQuestion question={question} />
      {answer && (
        <>
          <SelectedAnswer answer={answer} />
          <Evaluation />
        </>
      )}
    </S.Container>
  );
};

export default Feedback;
