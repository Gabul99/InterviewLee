import { Question } from '../../models/Board/Question';

export const mockQuestions: Question[] = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'John Doe',
    },
    title: 'How to write a good resume?',
    description: 'I want to write a good resume. What are some tips?',
    rating: 3,
    answers: [],
    tags: [],
  },
  {
    id: '2',
    author: {
      id: '2',
      name: 'Jaehee',
    },
    title: '진짜 졸업하고 싶어요',
    description: '졸업하는 방법 좀 알려주세요',
    rating: 5,
    answers: [],
    tags: [],
  },
];
