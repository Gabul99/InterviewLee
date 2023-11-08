import PrimaryButton from '../../Common/Button/PrimaryButton';
import * as S from './AnswerInput.style';

const AnswerInput: React.FC = () => {
  return (
    <S.Container>
      <h2>A:</h2>
      <textarea />
      <PrimaryButton
        style={{ alignSelf: 'flex-end' }}
        label="Answer!"
        onClick={() => {
          console.log('TODO');
        }}
      />
    </S.Container>
  );
};

export default AnswerInput;
