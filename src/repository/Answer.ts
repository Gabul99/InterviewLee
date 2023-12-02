import { getDBData, setDBData } from '../firebase/Firebase';
import { Answer } from '../models/Board/Answer';

export const getAnswers = async (): Promise<Answer[] | undefined> => {
  const data = await getDBData();
  return data.answers ?? undefined;
};

export const getAnswerById = async (id: ID) => {
  const answers = await getAnswers();
  const target = answers?.filter((a: any) => a.id === id)[0] ?? undefined;
  return target;
};

export const getAnswerByQuestionId = async (id: ID) => {
  const answers = await getAnswers();
  const target = answers?.filter((a: any) => a.questionId === id) ?? [];
  return target;
};

export const addAnswer = async (answer: Answer) => {
  const answers = await getAnswers();
  if (answers === undefined) {
    setDBData('answers', [answer]);
  } else {
    setDBData('answers', [...answers, answer]);
  }
};
