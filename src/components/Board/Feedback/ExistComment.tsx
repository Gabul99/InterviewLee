import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import ProfileIcon from '../../Common/Icons/ProfileIcon';
import { Comment as CommentModel } from '../../../models/Board/Comment';

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
  cursor: pointer;

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

interface Props {
  data: CommentModel;
  selected: boolean;
  onSelect: () => void;
  onSubmit: (value: string) => void;
}

const ExistComment: React.FC<Props> = ({ data, selected, onSelect, onSubmit }: Props) => {
  const [tempReply, setTempReply] = useState<string>('');

  return (
    <Container>
      <TitleArea onClick={onSelect}>
        <div className={'profile'}>
          <ProfileIcon />
          <p>You</p>
        </div>
      </TitleArea>
      {selected && (
        <>
          <Contents>{data.comment}</Contents>
          <Input
            value={tempReply}
            placeholder="Write your feedback conmment"
            onChange={(e) => {
              setTempReply(e.target.value);
            }}
          />
          <ButtonArea>
            <Button
              onClick={() => {
                console.log('hihihi');
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

export default ExistComment;
