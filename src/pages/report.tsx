import { useEffect, useState } from 'react';
import ListItem from '../components/Report/ListItem';
import * as S from './report.style';
import ReportDetail from '../components/Report/ReportDetail';
import { useSearchParams } from 'react-router-dom';
import { useAuthContext } from '../context/Auth';
import { getAIReportsByUserId } from '../repository/AIReport';
import { AIReport } from '../models/AIReport';

const mockList = [
  {
    id: '1',
    question: 'Why do you apply this company?',
  },
];

const AIReportList: AIReport[] = [
  {
    id: '1',
    /**
     * Question 이랑 연결되는 포인트가 있어야 할 것 같아요, answer도 마찬가지로요
     *
     * 아래 첨부한 mockQuestions 를 참고해주세요 @gabul
     * @see {mockQuestions}
     * */
    questionId: '0',
    answerId: '0',
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
  const { profile } = useAuthContext();

  const defaultQuestionId = searchParams.get('questionId') ?? null;
  const defaultAnswerId = searchParams.get('answerId') ?? null;
  const [reports, setReports] = useState<AIReport[]>([]);

  const [selectedId, setSelectedId] = useState<Nullable<ID>>(defaultQuestionId);
  const selectedReport = selectedId === null ? null : reports.filter((i) => i.id === selectedId)[0] ?? null;

  useEffect(() => {
    getAIReportsByUserId(profile.id).then((data) => {
      setReports(data ?? []);
    });
  }, [profile.id]);

  useEffect(() => {
    if (!reports || !defaultAnswerId || !defaultQuestionId) return;
    const defaultReport = reports.filter((report) => report.questionId === defaultQuestionId && report.answerId === defaultAnswerId)[0] ?? undefined;
    if (defaultReport === undefined) return;
    setSelectedId(defaultReport.id ?? null);
  }, [reports, defaultQuestionId, defaultAnswerId]);

  return (
    <S.Container>
      <S.Header>Reports</S.Header>
      <S.Body>
        <S.LeftListArea>
          <h2 className="title">Reports for My Answers</h2>
          {reports.map((report) => (
            <ListItem key={report.id} selected={selectedId === report.id} report={report} onClick={() => setSelectedId(report.id)} />
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
