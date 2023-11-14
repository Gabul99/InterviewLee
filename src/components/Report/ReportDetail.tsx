import RadarChart from './RadarChart';
import * as S from './ReportDetail.style';
import { AIReport, getReportAvg } from '../../models/AIReport';
import { getClarityDetail, getDepthDetail, getFollowUpDetail, getUniquenessDetail } from '../../utils/generateReportDetail';
import { useEffect, useState } from 'react';
import { getSimilarRatedReport, getTopAIReportsByQuestionId } from '../../repository/AIReport';
import { useQuestionContext } from '../../context/Question';
import { useRouter } from '../../router/routing';

interface Props {
  review: AIReport;
}

const ReportDetail: React.FC<Props> = ({ review }: Props) => {
  const [topReports, setTopReports] = useState<AIReport[]>([]);
  const [similarReport, setSimilarReport] = useState<AIReport | null>(null);
  const router = useRouter();

  const { setSelectedQuestionId, setSelectedAnswerId } = useQuestionContext();

  const avgValue = (review.clarity + review.depth + review.uniqueness + review.follow_up) / 4;

  const getColor = (score: number) => {
    if (score >= 65) return 'green';
    else if (score >= 35) return 'yellow';
    else return 'red';
  };

  const redirect = (report: AIReport) => {
    setSelectedAnswerId(report.answerId);
    setSelectedQuestionId(report.questionId);
    router.push('/board');
  };

  useEffect(() => {
    getTopAIReportsByQuestionId(review.questionId).then((data) => setTopReports(data));
    getSimilarRatedReport(review).then((data) => {
      setSimilarReport(data);
    });
  }, [review]);

  return (
    <S.Container>
      <S.QnAContainer>
        <h2 className="question">Question</h2>
        <p className="desc-q">{review.question}</p>
      </S.QnAContainer>
      <S.QnAContainer>
        <h2 className="answer">Answer</h2>
        <p className="desc-a">{review.answer}</p>
      </S.QnAContainer>
      <S.PointArea>
        <S.TotalPointContainer>
          <h2 className="title">Total</h2>
          <p className="avg">Avg. {avgValue}</p>
          <RadarChart report={review} />
        </S.TotalPointContainer>
        <S.DetailArea>
          <DetailItem title="Clarity" point={review.clarity} advice={getClarityDetail(review.clarity)} />
          <DetailItem title="Uniqueness" point={review.uniqueness} advice={getUniquenessDetail(review.uniqueness)} />
          <DetailItem title="Depth" point={review.depth} advice={getDepthDetail(review.depth)} />
          <DetailItem title="Follow-up" point={review.follow_up} advice={getFollowUpDetail(review.follow_up)} />
        </S.DetailArea>
      </S.PointArea>
      <S.OtherAnswerContainer>
        <h2 className="title">Top Answers</h2>
        <div className="item-list">
          {topReports.map((report) => {
            return (
              <S.OtherAnswerItem key={report.id} onClick={() => redirect(report)}>
                <p className="point">
                  Avg <span className={getColor(getReportAvg(report))}>{getReportAvg(report)}</span>
                </p>
                <div className="answer">{report.answer}</div>
              </S.OtherAnswerItem>
            );
          })}
          {topReports.length === 0 && <div className="empty-desc">There is no data from other users yet. Please wait!</div>}
        </div>
        <h2 className="title">Similar Rated Answers</h2>
        {similarReport && (
          <S.OtherAnswerItem onClick={() => redirect(similarReport)}>
            <p className="point">
              Avg <span className={getColor(getReportAvg(similarReport))}>{getReportAvg(similarReport)}</span>
            </p>
            <div className="answer">{similarReport.answer}</div>
          </S.OtherAnswerItem>
        )}
        {similarReport === null && <div className="empty-desc">There is no data from other users yet. Please wait!</div>}
      </S.OtherAnswerContainer>
    </S.Container>
  );
};

const DetailItem = ({ title, point, advice }: { title: string; point: number; advice: string }) => {
  return (
    <S.DetailItem>
      <h2 className="title">{title}</h2>
      <div className="horizontal">
        <div className="point">{point}</div>
        <p className="body">{advice}</p>
      </div>
    </S.DetailItem>
  );
};

export default ReportDetail;
