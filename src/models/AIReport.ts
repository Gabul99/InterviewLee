export interface AIReport {
  id: ID;
  questionId: ID;
  answerId: ID;
  question: string;
  answer: string;
  clarity: number;
  uniqueness: number;
  depth: number;
  follow_up: number;
}

export function getReportAvg(report: AIReport) {
  return (report.clarity + report.depth + report.uniqueness + report.follow_up) / 4;
}
