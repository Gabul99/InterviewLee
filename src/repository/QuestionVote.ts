import { getDBData, setDBData } from '../firebase/Firebase';
import { Vote } from '../models/Board/Question';

const getQuestionVote = async () => {
  const data = await getDBData();
  return data.questionVote ?? [];
};

export const getQuestionVoteById = async (questionId: ID) => {
  const questionVotes = await getQuestionVote();
  const target = questionVotes.filter((v: Vote) => v.questionId === questionId) ?? [];
  return target;
};

export const addQuestionVote = async (vote: Vote) => {
  const questionVotes = await getQuestionVote();
  if (questionVotes === undefined) {
    setDBData('questionVote', [vote]);
  } else {
    setDBData('questionVote', [...questionVotes, vote]);
  }
};
