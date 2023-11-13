import { User } from '../Common/User';

export interface Answer {
  id: ID;
  questionId: ID;
  authorId: ID;
  description: string;
  // rating -1 for unknown
  rating: number;
}
