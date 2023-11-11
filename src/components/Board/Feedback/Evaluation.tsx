import { useQuestionContext } from '../../../context/Question';
import { useRouter } from '../../../router/routing';
import * as S from './Evaluation.style';

const Evaluation: React.FC = () => {
  const { push } = useRouter();
  const { selectedQuestionId, selectedAnswerId } = useQuestionContext();

  const navigateReport = () => {
    if (selectedQuestionId === null) return;

    push('/report', { questionId: selectedQuestionId, answerId: selectedAnswerId });
  };

  return (
    <S.Container>
      <p>How do AI evaluate this answer?</p>
      <S.Content>
        <S.Title>{`Total Avg. `}</S.Title>
        <S.Description>
          <div className="column">
            <p>Clarity</p>
            <p>??</p>
          </div>
          <div className="column">
            <p>Uniqueness</p>
            <p>??</p>
          </div>
          <div className="column">
            <p>Depth</p>
            <p>??</p>
          </div>
          <div className="column">
            <p>Follow-up</p>
            <p>??</p>
          </div>
        </S.Description>
        <S.Button onClick={navigateReport}>Go to Open AI’s Report!</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default Evaluation;
