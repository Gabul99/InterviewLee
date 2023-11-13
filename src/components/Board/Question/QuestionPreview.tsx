import { useEffect, useState } from 'react';
import { Question } from '../../../models/Board/Question';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import * as S from './QuestionPreview.style';
import { Answer } from '../../../models/Board/Answer';
import { getAnswerByQuestionId } from '../../../repository/Answer';

interface QuestionWrapperProps {
  question: Question;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  focused?: boolean;
}

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({ question, onClick, focused }: QuestionWrapperProps) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const { question: questionValue, tags } = question;

  useEffect(() => {
    getAnswerByQuestionId(question.id).then((data) => setAnswers(data ?? []));
  }, [question.id]);

  return (
    <S.Container onClick={(e) => onClick?.(e)}>
      <h2>Q:</h2>
      <S.QuestionContentWrapper>
        <S.TagContainer>
          {tags.map((tag) => (
            <S.TagWrapper key={tag}>{`#${tag}`}</S.TagWrapper>
          ))}
        </S.TagContainer>
        <p>{questionValue}</p>
        <span>{answers.length ? `${answers.length.toLocaleString()} people have responded` : ''}</span>
      </S.QuestionContentWrapper>
      {!focused && (
        <PrimaryButton
          style={{ alignSelf: 'flex-end' }}
          label="Answer!"
          onClick={() => {
            console.log('TODO');
          }}
        />
      )}
    </S.Container>
  );
};

export default QuestionWrapper;
