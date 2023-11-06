import { Tag } from '../Common/Tag';
import { User } from '../Common/User';
import { Answer } from './Answer';

export interface Question {
  id: string;
  author: User;
  title: string;
  description: string;
  // max rating : 5
  rating: number;
  answers: Answer[];
  tags: Tag[];
}
