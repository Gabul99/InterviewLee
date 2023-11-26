import { Tag } from '../Common/Tag';
import { User } from '../Common/User';
import { Answer } from './Answer';

export interface Question {
  id: ID;
  authorId: ID;
  question: string;
  // max rating : 5
  rating: number;
  tags: string[];
  position: string | null;
}
