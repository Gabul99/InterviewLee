import { getDBData, setDBData } from '../firebase/Firebase';
import { Answer } from '../models/Board/Answer';

export const getAnswers = async () => {
  const data = await getDBData();
  return data.answers ?? undefined;
};

export const getAnswerById = async (id: ID) => {
  const answers = await getAnswers();
  const target = answers.filter((a: any) => a.id === id)[0] ?? undefined;
  return target;
};

export const addAnswer = async (answer: Answer) => {
  const answers = await getAnswers();
  if (answers === undefined) {
    setDBData('questions', [answer]);
  } else {
    setDBData('questions', [...answers, answer]);
  }
};
