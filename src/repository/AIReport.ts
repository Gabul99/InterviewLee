import { getDBData, setDBData } from '../firebase/Firebase';
import { AIReport } from '../models/AIReport';

export const getAIReports = async () => {
  const data = await getDBData();
  return data.reports ?? undefined;
};

export const getAIReportsByUserId = async (id: ID) => {
  const reports = await getAIReports();
  const target = reports.filter((r: any) => r.userId === id)[0] ?? undefined;
  return target;
};

export const getAIReportsByAnswerId = async (userId: ID, answerId: ID) => {
  const reports = await getAIReportsByUserId(userId);
  const target = reports.filter((r: any) => r.answerId === answerId)[0] ?? undefined;
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
