import { useEffect, useState } from 'react';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import * as S from './AnswerInput.style';
import { useQuestionContext } from '../../../context/Question';
import { Question } from '../../../models/Board/Question';
import { Answer } from '../../../models/Board/Answer';
import { useAuthContext } from '../../../context/Auth';
import { v4 } from 'uuid';
import { addAnswer } from '../../../repository/Answer';
import { createAIReport } from '../../../repository/AIReport';
import { toast } from 'react-toastify';
import LinkToast from '../../Toast/LinkToast';

interface Props {
  question: Question;
  myAnswer?: Answer;
  refresh: () => void;
}

const AnswerInput: React.FC<Props> = (props) => {
  const { question, myAnswer, refresh } = props;

  const { setSelectedQuestionId, setSelectedAnswerId } = useQuestionContext();
  const { profile } = useAuthContext();

  const [value, setValue] = useState('');

  useEffect(() => {
    if (!!myAnswer) setValue(myAnswer.description);
  }, [myAnswer]);

  const handleSubmit = async () => {
    if (value === '') return;
    const newAnswer: Answer = {
      id: v4(),
      questionId: question.id,
      authorId: profile.id,
      description: value,
      rating: -1,
    };
    await addAnswer(newAnswer);
    setSelectedQuestionId(question.id);
    setSelectedAnswerId(newAnswer.id);
    showToast();
    await createAIReport(profile.id, question, newAnswer);
    refresh();
  };

  const showToast = () => {
    toast(<LinkToast text={'Nice answer! +10 pts to your university'} />);
  };

  return (
    <S.Container>
      <h2>A:</h2>
      <S.Textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Write your answer!" disabled={!!myAnswer} confirmed={!!myAnswer} />
      <PrimaryButton
        style={{ alignSelf: 'flex-end' }}
        label={!!myAnswer ? 'Request Feedback' : 'Answer!'}
        onClick={() => {
          if (myAnswer) {
            setSelectedQuestionId(question.id);
            setSelectedAnswerId(myAnswer.id);
          } else {
            handleSubmit();
          }
        }}
        disabled={value.trim().length === 0}
      />
    </S.Container>
  );
};

export default AnswerInput;
