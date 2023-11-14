import { v4 } from 'uuid';
import { useAuthContext } from '../../../context/Auth';
import { Answer } from '../../../models/Board/Answer';
import { Comment as CommentModel, SubComment } from '../../../models/Board/Comment';
import { addComment, addSubComment, getCommentsByAnswerId } from '../../../repository/Comment';
import ProfileIcon from '../../Common/Icons/ProfileIcon';
import ExistComment from './ExistComment';
import NewComment from './NewComment';
import * as S from './SelectedAnswer.style';
import React, { useEffect, useState } from 'react';
import { Question } from '../../../models/Board/Question';

interface Props {
  answer: Answer;
  question: Question;
}

const SelectedAnswer: React.FC<Props> = (props) => {
  const [comments, setComments] = useState<CommentModel[]>([]);
  const [anchorIndex, setAnchorIndex] = useState<number | null>(null);
  const [lastIndex, setLastIndex] = useState<number | null>(null);
  const [tempComment, setTempComment] = useState<CommentModel | null>(null);
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null);
  const { answer, question } = props;

  const { profile } = useAuthContext();

  const name = profile.id === answer.authorId ? 'You' : 'Anonymous';

  useEffect(() => {
    refresh();
  }, [answer]);

  const refresh = () => {
    getCommentsByAnswerId(answer.id).then((data) => setComments(data ?? []));
  };

  const postSubComment = (commentId: string, subComment: SubComment) => {
    addSubComment(commentId, subComment).then(() => refresh());
  };

  const highlight = (idx: number) => {
    if (tempComment) {
      const min = Math.min(tempComment.startIndex, tempComment.lastIndex);
      const max = Math.max(tempComment.startIndex, tempComment.lastIndex);
      if (idx >= min && idx <= max) return 'yellow-selected';
    }
    if (selectedCommentId) {
      const selected = comments?.filter((com) => com.id === selectedCommentId)[0] ?? undefined;
      if (!selected) return '';
      const min = Math.min(selected.startIndex, selected.lastIndex);
      const max = Math.max(selected.startIndex, selected.lastIndex);
      if (idx >= min && idx <= max) return 'yellow-selected';
    }
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      const min = Math.min(comment.startIndex, comment.lastIndex);
      const max = Math.max(comment.startIndex, comment.lastIndex);
      if (idx >= min && idx <= max) return 'yellow-not';
    }
    return '';
  };

  const getCommentByIdx = (idx: number) => {
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      if (idx >= comment.startIndex && idx <= comment.lastIndex) return comment.id;
    }
    return null;
  };

  return (
    <S.Container>
      <div className="title">
        <ProfileIcon />
        <p>{name}</p>
      </div>
      <S.Content>
        <S.AnswerWrapper id={'answers'}>
          <p>
            {Array.from(answer.description).map((char, idx) => (
              <S.Char
                key={`${idx}${char}${highlight(idx)}`}
                className={highlight(idx)}
                onMouseDown={() => {
                  if (highlight(idx) === 'yellow-not') {
                    setSelectedCommentId(getCommentByIdx(idx));
                  } else {
                    setAnchorIndex(idx);
                    setLastIndex(idx);
                    setSelectedCommentId(null);
                  }
                }}
                onMouseEnter={() => {
                  if (anchorIndex !== null) setLastIndex(idx);
                }}
                onMouseUp={() => {
                  if (anchorIndex && lastIndex) {
                    setTempComment({
                      id: v4(),
                      authorId: profile.id,
                      answerId: answer.id,
                      startIndex: anchorIndex,
                      lastIndex: lastIndex,
                      comment: '',
                      subComments: [],
                    });
                  }
                  setAnchorIndex(null);
                  setLastIndex(null);
                }}
              >
                {char}
              </S.Char>
            ))}
          </p>
        </S.AnswerWrapper>
        <S.CommentWrapper>
          {comments &&
            comments
              .sort((a, b) => a.startIndex - b.startIndex)
              .map((comment, idx) => {
                return (
                  <ExistComment
                    key={idx}
                    data={comment}
                    selected={selectedCommentId === comment.id}
                    onSelect={() => {
                      setSelectedCommentId(comment.id);
                      setTempComment(null);
                    }}
                    onSubComment={(subComment: SubComment) => postSubComment(comment.id, subComment)}
                  />
                );
              })}
          {tempComment !== null && (
            <NewComment
              data={tempComment}
              question={question}
              onSubmit={(value: string) => {
                addComment({ ...tempComment, comment: value }).then(() => {
                  setTempComment(null);
                  setSelectedCommentId(tempComment.id);
                  refresh();
                });
              }}
            />
          )}
        </S.CommentWrapper>
      </S.Content>
    </S.Container>
  );
};

export default SelectedAnswer;
