import { getDBData, setDBData } from '../firebase/Firebase';

export const getCampus = async () => {
  const data = await getDBData();
  return data.campus ?? undefined;
};

export const addUserCount = async (campusName: string) => {
  const campus = await getCampus();
  const newCampus = campus.map((c: any) => {
    if (c.name === campusName) return { ...c, userCount: c.userCount + 1 };
    else return c;
  });
  setDBData('campus', newCampus);
};

export const addQuestionCount = async (campusName: string) => {
  const campus = await getCampus();
  const newCampus = campus.map((c: any) => {
    if (c.name === campusName) return { ...c, questionCount: c.questionCount + 1, point: c.point + 10 };
    else return c;
  });
  setDBData('campus', newCampus);
};

export const addAnswerCount = async (campusName: string) => {
  const campus = await getCampus();
  const newCampus = campus.map((c: any) => {
    if (c.name === campusName) return { ...c, answerCount: c.answerCount + 1, point: c.point + 10 };
    else return c;
  });
  setDBData('campus', newCampus);
};
