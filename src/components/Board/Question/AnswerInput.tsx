import { useState } from 'react';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import * as S from './AnswerInput.style';
import { useQuestionContext } from '../../../context/Question';
import { Question } from '../../../models/Board/Question';
import { Answer } from '../../../models/Board/Answer';
import { useAuthContext } from '../../../context/Auth';

interface Props {
  id: Question['id'];
}

const AnswerInput: React.FC<Props> = (props) => {
  const { id: questionId } = props;

  const { setSelectedQuestionId, setSelectedAnswerId } = useQuestionContext();
  const { profile } = useAuthContext();

  const [value, setValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const uploadAnswer = async () => {
    const data: Omit<Answer, 'id'> = {
      author: profile,
      description: value,
      rating: -1,
    };
  };

  // TODO: Firebase 연결
  const handleSubmit = async () => {
    const res = await uploadAnswer();

    setSelectedQuestionId(questionId);
    // TODO: res.id 로 변경
    setSelectedAnswerId('1');
  };

  return (
    <S.Container>
      <h2>A:</h2>
      <S.Textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Write your answer!" disabled={confirmed} confirmed={confirmed} />
      <PrimaryButton
        style={{ alignSelf: 'flex-end' }}
        label={confirmed ? 'Request Feedback' : 'Answer!'}
        onClick={() => {
          if (!confirmed) {
            setConfirmed(true);
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
