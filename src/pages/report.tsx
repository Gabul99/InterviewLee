import { useEffect, useState } from 'react';
import ListItem from '../components/Report/ListItem';
import * as S from './report.style';
import ReportDetail from '../components/Report/ReportDetail';
import { useSearchParams } from 'react-router-dom';
import { useAuthContext } from '../context/Auth';
import { getAIReportsByUserId } from '../repository/AIReport';
import { AIReport } from '../models/AIReport';

const Report: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { profile } = useAuthContext();

  const defaultQuestionId = searchParams.get('questionId') ?? null;
  const defaultAnswerId = searchParams.get('answerId') ?? null;
  const [reports, setReports] = useState<AIReport[]>([]);

  const [selectedId, setSelectedId] = useState<Nullable<ID>>(defaultQuestionId);
  const selectedReport = selectedId === null ? null : reports.filter((i) => i.id === selectedId)[0] ?? null;

  useEffect(() => {
    if (!profile) return;
    getAIReportsByUserId(profile.id).then((data) => {
      setReports(data ?? []);
    });
  }, [profile?.id]);

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
          {!profile && (
            <div className="empty">
              Please log-in to write answer
              <br />
              and check AI REPORTS!
            </div>
          )}
          {profile && !selectedReport && (
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
