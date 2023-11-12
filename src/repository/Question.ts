import { getDBData, setDBData } from '../firebase/Firebase';
import { Question } from '../models/Board/Question';

export const getQuestions = async () => {
  const data = await getDBData();
  return data.questions ?? undefined;
};

export const getQuestionById = async (id: ID) => {
  const questions = await getQuestions();
  const target = questions.filter((q: any) => q.id === id)[0] ?? undefined;
  return target;
};

export const addQuestion = async (question: Question) => {
  const questions = await getQuestions();
  if (questions === undefined) {
    setDBData('questions', [question]);
  } else {
    setDBData('questions', [...questions, question]);
  }
};
