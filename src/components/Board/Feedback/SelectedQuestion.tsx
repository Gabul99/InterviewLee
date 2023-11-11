import { useQuestionContext } from '../../../context/Question';
import { Question } from '../../../models/Board/Question';
import * as S from './SelectedQuestion.style';

interface QuestionWrapperProps {
  question: Question;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SelectedQuestion: React.FC<QuestionWrapperProps> = ({ question, onClick }: QuestionWrapperProps) => {
  const { selectedQuestionId, setSelectedQuestionId } = useQuestionContext();

  const { description, tags } = question;

  return (
    <S.Container onClick={(e) => onClick?.(e)}>
      {tags.map((tag) => (
        <S.TagWrapper key={tag.name}>{`#${tag.name}`}</S.TagWrapper>
      ))}
      <S.QuestionWrapper>
        <h2>Q:</h2>
        <S.QuestionDescriptionWrapper>
          <p>{description}</p>
        </S.QuestionDescriptionWrapper>
        {selectedQuestionId && (
          <div style={{ alignSelf: 'flex-end' }} onClick={() => setSelectedQuestionId(null)}>
            <CancelButton />
          </div>
        )}
      </S.QuestionWrapper>
    </S.Container>
  );
};

export default SelectedQuestion;

const CancelButton: React.FC = () => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="41" viewBox="0 0 42 41" fill="none">
        <line x1="41.3536" y1="0.353553" x2="1.35355" y2="40.3536" stroke="black" />
        <line x1="41.6601" y1="39.3667" x2="0.66012" y2="1.36671" stroke="black" />
      </svg>
    </div>
  );
};
