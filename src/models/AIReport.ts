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
