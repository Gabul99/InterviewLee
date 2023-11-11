import { useState } from 'react';
import ListItem from '../components/Report/ListItem';
import * as S from './report.style';
import ReportDetail from '../components/Report/ReportDetail';
import { useSearchParams } from 'react-router-dom';
import { mockQuestions } from '../api/mocks/question.mock';

const mockList = [
  {
    id: '1',
    question: 'Why do you apply this company?',
  },
];

export interface AIReport {
  id: ID;
  question: string;
  answer: string;
  clarity: number;
  uniqueness: number;
  depth: number;
  follow_up: number;
}

const AIReportList: AIReport[] = [
  {
    id: '1',
    /**
     * Question 이랑 연결되는 포인트가 있어야 할 것 같아요, answer도 마찬가지로요
     *
     * 아래 첨부한 mockQuestions 를 참고해주세요 @gabul
     * @see {mockQuestions}
     * */
    question: 'Why do you apply this company?',
    answer: 'Gain money, what else.',
    clarity: 70,
    uniqueness: 50,
    depth: 90,
    follow_up: 45,
  },
];

const Report: React.FC = () => {
  const [searchParams] = useSearchParams();

  const defaultQuestionId = searchParams.get('questionId') ?? null;
  const defaultAnswerId = searchParams.get('answerId') ?? null;

  const [selectedId, setSelectedId] = useState<Nullable<ID>>(defaultQuestionId);
  const selectedReport = selectedId === null ? null : AIReportList.filter((i) => i.id === selectedId)[0] ?? null;

  return (
    <S.Container>
      <S.Header>Reports</S.Header>
      <S.Body>
        <S.LeftListArea>
          <h2 className="title">List</h2>
          {mockQuestions.map((i) => (
            <ListItem key={i.id} selected={selectedId === i.id} question={i.title} onClick={() => setSelectedId(i.id)} />
          ))}
        </S.LeftListArea>
        <S.Contents>
          {!selectedReport && (
            <div className="empty">
              Check the report about your answer
              <br />
              by selecting in left list!
            </div>
          )}
          {selectedReport && <ReportDetail review={selectedReport} />}
        </S.Contents>
      </S.Body>
    </S.Container>
  );
};

export default Report;
