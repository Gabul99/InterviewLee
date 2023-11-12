import { getDBData, setDBData } from '../firebase/Firebase';
import { Comment, SubComment } from '../models/Board/Comment';

export const getComments = async () => {
  const data = await getDBData();
  return data.comments ?? undefined;
};

export const getCommentsByAnswerId = async (id: ID) => {
  const comments = await getComments();
  const target = comments.filter((c: any) => c.answerId === id)[0] ?? undefined;
  return target;
};

export const addComment = async (comment: Comment) => {
  const comments = await getComments();
  if (comments === undefined) {
    setDBData('comments', [comments]);
  } else {
    setDBData('comments', [...comments, comments]);
  }
};

export const addSubComment = async (commentId: ID, subComment: SubComment) => {
  const comments = await getComments();
  if (comments === undefined) return;
  const newData = comments.map((comment: Comment) => {
    if (comment.id === commentId) {
      return {
        ...comment,
        subComments: [...comment.subComments, subComment],
      };
    } else {
      return comment;
    }
  });
  setDBData('comments', newData);
};
