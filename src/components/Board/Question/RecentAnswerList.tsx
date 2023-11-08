import React from 'react';
import { Answer } from '../../../models/Board/Answer';

import * as S from './RecentAnswerList.style';

interface Props {
  answers: Answer[];
}

const RecentAnswerList: React.FC<Props> = ({ answers }) => {
  return (
    <S.Container>
      <h2>Recent Answers</h2>
      {answers.map((answer) => (
        <RecentAnswer key={answer.id} answer={answer} />
      ))}
    </S.Container>
  );
};

export default RecentAnswerList;

interface RecentAnswerProps {
  answer: Answer;
}

const RecentAnswer: React.FC<RecentAnswerProps> = ({ answer }) => {
  return (
    <S.AnswerWrapper>
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: '#0B409C',
        }}
      />
      <p className="author">Anonymous</p>
      <span className="answer">{answer.description}</span>
    </S.AnswerWrapper>
  );
};
