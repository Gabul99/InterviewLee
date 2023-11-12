import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import ProfileIcon from '../../Common/Icons/ProfileIcon';
import { Comment as CommentModel, SubComment } from '../../../models/Board/Comment';

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

const SubCommentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  onSubComment: (value: SubComment) => void;
}

const ExistComment: React.FC<Props> = ({ data, selected, onSelect, onSubComment }: Props) => {
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
          {data.subComments.length > 0 && (
            <SubCommentList>
              {data.subComments.map((comment) => (
                <SubCommentUI key={comment.authorId + comment.comment} data={comment} />
              ))}
            </SubCommentList>
          )}
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
                if (tempReply === '') return;
                onSubComment({
                  authorId: 'someone',
                  comment: tempReply,
                });
                setTempReply('');
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

const SubCommentContainer = styled.div`
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SubCommentProfile = styled.div`
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
      font-size: 12px;
      font-weight: 600;
    }
  }
`;

const SubCommentUI = ({ data }: { data: SubComment }) => {
  return (
    <SubCommentContainer>
      <SubCommentProfile>
        <div className={'profile'}>
          <ProfileIcon />
          <p>{data.authorId}</p>
        </div>
      </SubCommentProfile>
      <Contents>{data.comment}</Contents>
    </SubCommentContainer>
  );
};

export default ExistComment;
