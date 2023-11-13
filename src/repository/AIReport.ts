import { v4 } from 'uuid';
import { getDBData, setDBData } from '../firebase/Firebase';
import { AIReport } from '../models/AIReport';
import { Answer } from '../models/Board/Answer';
import { Question } from '../models/Board/Question';

export const getAIReports = async () => {
  const data = await getDBData();
  return data.reports ?? undefined;
};

export const getAIReportsByUserId = async (id: ID) => {
  const reports = await getAIReports();
  const target = reports?.filter((r: any) => r.userId === id) ?? undefined;
  return target;
};

export const getAIReportsByAnswerId = async (userId: ID, answerId: ID) => {
  const reports = await getAIReportsByUserId(userId);
  const target = reports?.filter((r: any) => r.answerId === answerId)[0] ?? undefined;
  return target;
};

export const addReport = async (report: AIReport) => {
  const reports = await getAIReports();
  if (reports === undefined) {
    setDBData('reports', [report]);
  } else {
    setDBData('reports', [...reports, report]);
  }
};

export const createAIReport = async (userId: string, question: Question, answer: Answer) => {
  function getRandomNumber() {
    const values = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    const randomIndex = Math.floor(Math.random() * values.length);
    const randomValue = values[randomIndex];
    return randomValue;
  }
  const newReport = {
    id: v4(),
    userId: userId,
    questionId: question.id,
    answerId: answer.id,
    question: question.question,
    answer: answer.description,
    clarity: getRandomNumber(),
    uniqueness: getRandomNumber(),
    depth: getRandomNumber(),
    follow_up: getRandomNumber(),
  };
  await addReport(newReport);
};
