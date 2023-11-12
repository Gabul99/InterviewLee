import { useState } from 'react';
import * as S from './QuestionPost.style';
import PrimaryButton from '../Common/Button/PrimaryButton';

interface Props {
  onClose: () => void;
}

const QuestionPost: React.FC<Props> = (props) => {
  const { onClose } = props;

  const [value, setValue] = useState('');

  return (
    <S.Container>
      <S.Description>
        <h3>Write a Question</h3>
        <div className="description">
          InterviewLee’s exclusive inspection process will check whether your question is both distinct from those already posted on the Question Board and
          meets the criteria of language appropriateness and relevance to job interviews. We strive to offer a valuable and user-friendly experience for all
          InterviewLee users. Only if your question successfully passes the inspection, it gets posted on the Question Board anonymously and increases your
          Campus Spirit Score.
        </div>
      </S.Description>
      <S.QuestionInputWrapper>
        <p>Question</p>
        <S.Textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Write your question here.." />
        <div className="button-wrapper">
          <PrimaryButton
            label="Inspect"
            onClick={() => {
              console.log('TODO');
              onClose();
            }}
          />
        </div>
      </S.QuestionInputWrapper>
    </S.Container>
  );
};

export default QuestionPost;
