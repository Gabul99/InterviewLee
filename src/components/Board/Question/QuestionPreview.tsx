import { useEffect, useState } from 'react';
import { Question } from '../../../models/Board/Question';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import * as S from './QuestionPreview.style';
import { Answer } from '../../../models/Board/Answer';
import { getAnswerByQuestionId } from '../../../repository/Answer';
import RatingButton from '../../Common/Button/RatingButton';
import { useAuthContext } from '../../../context/Auth';
import DataAnalyist from '../../../assets/data_analyist.svg';
import Frontend from '../../../assets/frontend.svg';
import Backend from '../../../assets/backend.svg';

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
      <S.ImageWrapper>
        {question.position === 'Data Analyist' && (
          <>
            <img src={DataAnalyist} />
            <div className="position-name">
              DATA
              <br />
              ANALYST
            </div>
          </>
        )}
        {question.position === 'Back-end' && (
          <>
            <img src={Backend} />
            <div className="position-name">
              BACK
              <br />
              END
            </div>
          </>
        )}
        {question.position === 'Front-end' && (
          <>
            <img src={Frontend} />
            <div className="position-name">
              FRONT
              <br />
              END
            </div>
          </>
        )}
      </S.ImageWrapper>
      <S.QuestionContentWrapper>
        <S.TagContainer>
          {tags.map((tag) => (
            <S.TagWrapper key={tag}>{`#${tag}`}</S.TagWrapper>
          ))}
        </S.TagContainer>
        <div className="content">
          <p>{questionValue}</p>
          <span>{answers.length ? `${answers.length.toLocaleString()} people have responded` : ''}</span>
        </div>
      </S.QuestionContentWrapper>
      {!focused && (
        <S.ButtonWrapper>
          <RatingButton selected={false} onClick={(e) => handleRatingClick(e)} />
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
