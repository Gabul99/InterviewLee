import React from 'react';
import { Answer } from '../../../models/Board/Answer';

import * as S from './RecentAnswerList.style';
import { useQuestionContext } from '../../../context/Question';
import { Question } from '../../../models/Board/Question';
import { useAuthContext } from '../../../context/Auth';
import ProfileIcon from '../../Common/Icons/ProfileIcon';

interface Props {
  id: Question['id'];
  answers: Answer[];
}

const RecentAnswerList: React.FC<Props> = ({ id, answers }) => {
  const { profile } = useAuthContext();

  const anonymousAnswers = answers.filter((answer) => answer.authorId !== profile?.id);

  return (
    <S.Container>
      <h2>Recent Answers</h2>
      {anonymousAnswers.map((answer) => (
        <RecentAnswer key={answer.id} id={id} answer={answer} />
      ))}
    </S.Container>
  );
};

export default RecentAnswerList;

interface RecentAnswerProps {
  id: Question['id'];
  answer: Answer;
}

const RecentAnswer: React.FC<RecentAnswerProps> = ({ id, answer }) => {
  const { setSelectedAnswerId, setSelectedQuestionId } = useQuestionContext();

  const handleClick = () => {
    setSelectedQuestionId(id);
    setSelectedAnswerId(answer.id);
  };

  return (
    <S.AnswerWrapper onClick={handleClick}>
      <ProfileIcon />
      <p className="author">Anonymous</p>
      <span className="answer">{answer.description}</span>
    </S.AnswerWrapper>
  );
};
