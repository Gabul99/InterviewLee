import { useAuthContext } from '../../../context/Auth';
import { Answer } from '../../../models/Board/Answer';
import ProfileIcon from '../../Common/Icons/ProfileIcon';
import * as S from './SelectedAnswer.style';
import React from 'react';

interface Props {
  answer: Answer;
}

const SelectedAnswer: React.FC<Props> = (props) => {
  const { answer } = props;

  const { profile } = useAuthContext();

  const name = profile.id === answer.author.id ? 'You' : 'Anonymous';

  return (
    <S.Container>
      <div className="title">
        <ProfileIcon />
        <p>{name}</p>
      </div>
      <S.Content>
        <S.AnswerWrapper>{answer.description}</S.AnswerWrapper>
        <S.CommentWrapper></S.CommentWrapper>
      </S.Content>
    </S.Container>
  );
};

export default SelectedAnswer;
