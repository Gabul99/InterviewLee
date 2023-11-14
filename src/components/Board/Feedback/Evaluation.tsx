import { useEffect, useState } from 'react';
import { useQuestionContext } from '../../../context/Question';
import { Answer } from '../../../models/Board/Answer';
import { useRouter } from '../../../router/routing';
import * as S from './Evaluation.style';
import { AIReport } from '../../../models/AIReport';
import { getAIReportsByAnswerId } from '../../../repository/AIReport';
import { useAuthContext } from '../../../context/Auth';

interface Props {
  answer: Answer;
}

const Evaluation: React.FC<Props> = ({ answer }: Props) => {
  const { push } = useRouter();
  const [report, setReport] = useState<AIReport>();
  const { selectedQuestionId, selectedAnswerId } = useQuestionContext();

  useEffect(() => {
    getAIReportsByAnswerId(answer.id).then((data) => setReport(data));
  }, []);

  const navigateReport = () => {
    if (selectedQuestionId === null) return;

    push('/report', { questionId: selectedQuestionId, answerId: selectedAnswerId });
  };

  return (
    <S.Container>
      <p>How do AI evaluate this answer?</p>
      <S.Content>
        <S.Title>{`Total Avg. ${!report ? '??' : (report.clarity + report.depth + report.follow_up + report.uniqueness) / 4}`}</S.Title>
        <S.Description>
          <div className="column">
            <p>Clarity: </p>
            <p>{report ? report.clarity : '??'}</p>
          </div>
          <div className="column">
            <p>Uniqueness: </p>
            <p>{report ? report.uniqueness : '??'}</p>
          </div>
          <div className="column">
            <p>Depth: </p>
            <p>{report ? report.depth : '??'}</p>
          </div>
          <div className="column">
            <p>Follow-up: </p>
            <p>{report ? report.follow_up : '??'}</p>
          </div>
        </S.Description>
        <S.Button onClick={navigateReport}>Go to Open AI’s Report!</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default Evaluation;
