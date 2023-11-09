import { useState } from 'react';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import * as S from './AnswerInput.style';

const AnswerInput: React.FC = () => {
  const [value, setValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  return (
    <S.Container>
      <h2>A:</h2>
      <S.Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write your answer!"
        disabled={confirmed}
        confirmed={confirmed}
      />
      <PrimaryButton
        style={{ alignSelf: 'flex-end' }}
        label={confirmed ? 'Request Feedback' : 'Answer!'}
        onClick={() => {
          if (!confirmed) {
            setConfirmed(true);
          }
        }}
      />
    </S.Container>
  );
};

export default AnswerInput;
