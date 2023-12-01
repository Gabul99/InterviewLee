export interface Question {
  id: ID;
  authorId: ID;
  question: string;
  // max rating : 5
  rating: number;
  tags: string[];
  position: string[];
}

// NOTE: 종속 구조를 만들 수 없어서 아래 형식으로 작업
export interface Vote {
  questionId: ID;
  userId: ID;
}
