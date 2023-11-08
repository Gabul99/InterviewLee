import { User } from '../Common/User';

export interface Answer {
  id: string;
  author: User;
  description: string;
  rating: number;
}
