import { useEffect, useState } from 'react';
import { Question } from '../../../models/Board/Question';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import * as S from './QuestionPreview.style';
import { Answer } from '../../../models/Board/Answer';
import { getAnswerByQuestionId } from '../../../repository/Answer';
import RatingButton from '../../Common/Button/RatingButton';
import { useAuthContext } from '../../../context/Auth';

interface QuestionWrapperProps {
  question: Question;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  focused?: boolean;
}

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({ question, onClick, focused }: QuestionWrapperProps) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const { profile, setLoginModalOpen } = useAuthContext();

  const { question: questionValue, tags } = question;

  const handleRatingClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // NOTE: 부모 컴포넌트에 이미 onClick 달려있음
    e.stopPropagation();
    if (!profile) {
      setLoginModalOpen(true);
      return;
    }
    window.alert('Rating feature will be added soon!');
  };

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
        <S.ButtonWrapper>
          <RatingButton onClick={(e) => handleRatingClick(e)} />
          <PrimaryButton
            style={{ alignSelf: 'flex-end' }}
            label="Answer!"
            onClick={() => {
              console.log('TODO');
            }}
          />
        </S.ButtonWrapper>
      )}
    </S.Container>
  );
};

export default QuestionWrapper;
