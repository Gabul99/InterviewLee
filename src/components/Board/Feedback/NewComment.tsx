import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import ProfileIcon from '../../Common/Icons/ProfileIcon';
import { Comment as CommentModel } from '../../../models/Board/Comment';
import { Question } from '../../../models/Board/Question';
import { useAuthContext } from '../../../context/Auth';
import { Answer } from '../../../models/Board/Answer';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${Colors.White};
  border-radius: 16px;
  padding: 16px;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    p {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const Input = styled.input`
  all: unset;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.08);
  font-size: 12px;
  font-weight: 400;
`;

const Contents = styled.p`
  all: unset;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Button = styled.div`
  padding: 4px 8px;
  background-color: ${Colors.Secondary};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.White};
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
`;

enum Status {
  INIT,
  ADDING,
}

interface Props {
  data: CommentModel;
  answer: Answer;
  onSubmit: (value: string) => void;
}

const NewComment: React.FC<Props> = ({ data, answer, onSubmit }: Props) => {
  const [status, setStatus] = useState<Status>(Status.INIT);
  const [tempValue, setTempValue] = useState<string>('');

  const { profile } = useAuthContext();

  return (
    <Container>
      <TitleArea>
        <div className={'profile'}>
          <ProfileIcon />
          <p>You</p>
        </div>
        {status === Status.INIT && (
          <Button onClick={() => setStatus(Status.ADDING)}>{answer.authorId === profile?.id ? `Request Feedback` : `Give Text Feedback`}</Button>
        )}
      </TitleArea>
      {status === Status.ADDING && (
        <>
          <Input
            value={tempValue}
            placeholder="Type"
            onChange={(e) => {
              setTempValue(e.target.value);
            }}
          />
          <ButtonArea>
            <Button
              onClick={() => {
                onSubmit(tempValue);
              }}
            >
              Post
            </Button>
          </ButtonArea>
        </>
      )}
    </Container>
  );
};

export default NewComment;
