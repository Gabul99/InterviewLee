import { Question } from '../../models/Board/Question';

const mockUser = [
  {
    id: '1',
    name: 'John Doe',
    campus: 'MIT',
    question_no: 10,
    response_no: 15,
  },
  {
    id: '2',
    name: 'Jaehee',
    campus: 'KAIST',
    question_no: 15,
    response_no: 15,
  },
];

export const mockQuestions: Question[] = [
  // {
  //   id: '1',
  //   author: mockUser[0],
  //   title: 'How to write a good resume?',
  //   description: 'I want to write a good resume. What are some tips?',
  //   rating: 3,
  //   answers: [
  //     {
  //       id: '1',
  //       author: mockUser[0],
  //       description: 'You should write a good resume.',
  //       rating: 3,
  //     },
  //     {
  //       id: '2',
  //       author: mockUser[1],
  //       description: '졸업부터 하고 오세요',
  //       rating: 3,
  //     },
  //   ],
  //   tags: [{ name: 'Culture Fit', category: 'Interview' }],
  // },
  // {
  //   id: '2',
  //   author: {
  //     id: '2',
  //     name: 'Jaehee',
  //     campus: 'KAIST',
  //     question_no: 15,
  //     response_no: 15,
  //   },
  //   title: '진짜 졸업하고 싶어요',
  //   description: '졸업하는 방법 좀 알려주세요',
  //   rating: 5,
  //   answers: [],
  //   tags: [{ name: 'Culture Fit', category: 'Interview' }],
  // },
];
