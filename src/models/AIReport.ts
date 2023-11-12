export interface AIReport {
  id: ID;
  userId: ID;
  questionId: ID;
  answerId: ID;
  clarity: number;
  uniqueness: number;
  depth: number;
  follow_up: number;
}
