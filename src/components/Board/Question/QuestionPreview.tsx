import { useEffect, useState } from 'react';
import { Question, Vote } from '../../../models/Board/Question';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import * as S from './QuestionPreview.style';
import { Answer } from '../../../models/Board/Answer';
import { getAnswerByQuestionId } from '../../../repository/Answer';
import RatingButton from '../../Common/Button/RatingButton';
import { useAuthContext } from '../../../context/Auth';
import DataAnalyist from '../../../assets/data_analyist.svg';
import Frontend from '../../../assets/frontend.svg';
import Backend from '../../../assets/backend.svg';
import { addQuestionVote, getQuestionVoteById } from '../../../repository/QuestionVote';

interface QuestionWrapperProps {
  question: Question;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  focused?: boolean;
}

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({ question, onClick, focused }: QuestionWrapperProps) => {
  const { profile, setLoginModalOpen } = useAuthContext();

  const [answers, setAnswers] = useState<Answer[]>([]);
  const [votes, setVotes] = useState<number>(0);
  const [userResponse, setUserResponse] = useState<boolean>(false);

  const { question: questionValue, tags } = question;

  const fetchQuestionVote = async () => {
    const _votes = await getQuestionVoteById(question.id);
    const _userResponse = _votes.some((vote: Vote) => vote.userId === profile?.id);

    setUserResponse(_userResponse);
    setVotes(_votes.length);
  };

  const handleRatingClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // NOTE: 부모 컴포넌트에 이미 onClick 달려있음
    e.stopPropagation();
    if (!profile) {
      setLoginModalOpen(true);
      return;
    }

    if (!userResponse) {
      addQuestionVote({
        questionId: question.id,
        userId: profile?.id ?? '',
      }).then(fetchQuestionVote);
    }
  };

  useEffect(() => {
    fetchQuestionVote();
    getAnswerByQuestionId(question.id).then((data) => setAnswers(data ?? []));
  }, [question.id]);

  return (
    <S.Container onClick={(e) => onClick?.(e)}>
      <S.QuestionContentWrapper>
        <S.TagContainer>
          {question.position === 'Data Analyist' && (
            <S.PositionTag>
              <img src={DataAnalyist} />
              <div className="position-name">Data Analyist</div>
            </S.PositionTag>
          )}
          {question.position === 'Back-end' && (
            <S.PositionTag>
              <img src={Backend} />
              <div className="position-name">Back-end</div>
            </S.PositionTag>
          )}
          {question.position === 'Front-end' && (
            <S.PositionTag>
              <img src={Frontend} />
              <div className="position-name">Front-end</div>
            </S.PositionTag>
          )}
          {tags.map((tag) => (
            <S.TagWrapper key={tag}>{`#${tag}`}</S.TagWrapper>
          ))}
        </S.TagContainer>
        <div className="content">
          <p>{questionValue}</p>
          <QuestionResponse answers={answers} votes={votes} />
        </div>
      </S.QuestionContentWrapper>
      {!focused && (
        <S.ButtonWrapper>
          <RatingButton selected={userResponse} onClick={(e) => handleRatingClick(e)} />
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

interface ResponseProps {
  answers: Answer[];
  votes: number;
}

const QuestionResponse: React.FC<ResponseProps> = (props) => {
  const { answers, votes } = props;

  const response = (() => {
    const answerResponse = answers.length ? `${answers.length.toLocaleString()} people have responded` : '';
    const voteResponse = votes > 0 ? `${votes} people like this question` : '';

    const divider = answerResponse && voteResponse ? ' / ' : '';

    return `${answerResponse} ${divider} ${voteResponse}`;
  })();

  return <span>{response}</span>;
};
