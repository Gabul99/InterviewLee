import { mockQuestions } from '../../api/mocks/question.mock';
import { useQuestionContext } from '../../context/Question';
import * as S from './Feedback.style';
import QuestionWrapper from './Question/QuestionPreview';

const Feedback: React.FC = () => {
  const { selectedQuestionId } = useQuestionContext();

  const question = mockQuestions.find(
    (question) => question.id === selectedQuestionId,
  );

  if (!question) return null;

  return (
    <S.Container>
      <QuestionWrapper question={question} focused />
    </S.Container>
  );
};

export default Feedback;
