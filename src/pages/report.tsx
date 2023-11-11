import { useState } from 'react';
import ListItem from '../components/Report/ListItem';
import * as S from './report.style';
import ReportDetail from '../components/Report/ReportDetail';

const mockList = [
  {
    id: 1,
    question: 'Why do you apply this company?',
  },
];

export interface AIReport {
  id: number;
  question: string;
  answer: string;
  clarity: number;
  uniqueness: number;
  depth: number;
  follow_up: number;
}

const AIReportList: AIReport[] = [
  {
    id: 1,
    question: 'Why do you apply this company?',
    answer: 'Gain money, what else.',
    clarity: 70,
    uniqueness: 50,
    depth: 90,
    follow_up: 45,
  },
];

const Report: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedReport =
    selectedId === null
      ? null
      : AIReportList.filter((i) => i.id === selectedId)[0] ?? null;

  return (
    <S.Container>
      <S.Header>Reports</S.Header>
      <S.Body>
        <S.LeftListArea>
          <h2 className="title">List</h2>
          {mockList.map((i) => (
            <ListItem
              key={i.id}
              selected={selectedId === i.id}
              question={i.question}
              onClick={() => setSelectedId(i.id)}
            />
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
