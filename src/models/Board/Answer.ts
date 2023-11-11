import { User } from '../Common/User';

export interface Answer {
  id: ID;
  author: User;
  description: string;
  // rating -1 for unknown
  rating: number;
}
