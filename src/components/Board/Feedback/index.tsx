import { useEffect, useState } from 'react';
import { mockQuestions } from '../../../api/mocks/question.mock';
import { useQuestionContext } from '../../../context/Question';
import Evaluation from './Evaluation';
import * as S from './index.style';
import SelectedAnswer from './SelectedAnswer';
import SelectedQuestion from './SelectedQuestion';
import { Question } from '../../../models/Board/Question';
import { getAnswerById } from '../../../repository/Answer';
import { getQuestionById } from '../../../repository/Question';
import { Answer } from '../../../models/Board/Answer';

const Feedback: React.FC = () => {
  const [question, setQuestipn] = useState<Question>();
  const [answer, setAnswer] = useState<Answer>();
  const { selectedQuestionId, selectedAnswerId } = useQuestionContext();

  useEffect(() => {
    if (!selectedAnswerId || !selectedQuestionId) return;
    getAnswerById(selectedAnswerId).then((data) => setAnswer(data));
    getQuestionById(selectedQuestionId).then((data) => setQuestipn(data));
  }, [selectedAnswerId, selectedQuestionId]);

  if (!question) return null;

  return (
    <S.Container>
      <SelectedQuestion question={question} />
      {answer && (
        <>
          <SelectedAnswer answer={answer} question={question} />
          <Evaluation answer={answer} />
        </>
      )}
    </S.Container>
  );
};

export default Feedback;
