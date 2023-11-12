export interface Comment {
  id: ID;
  authorId: ID;
  answerId: ID;
  startIndex: number;
  lastIndex: number;
  comment: string;
  subComments: SubComment[];
}

export interface SubComment {
  authorId: ID;
  comment: string;
}
