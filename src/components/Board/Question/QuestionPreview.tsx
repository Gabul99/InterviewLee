import { useQuestionContext } from '../../../context/Question';
import { Question } from '../../../models/Board/Question';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import * as S from './QuestionPreview.style';

interface QuestionWrapperProps {
  question: Question;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  focused?: boolean;
}

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({ question, onClick, focused }: QuestionWrapperProps) => {
  const { selectedQuestionId, setSelectedQuestionId } = useQuestionContext();

  const { description, answers, tags } = question;

  return (
    <S.Container onClick={(e) => onClick?.(e)}>
      <h2>Q:</h2>
      <S.QuestionContentWrapper>
        {tags.map((tag) => (
          <S.TagWrapper key={tag.name}>{`#${tag.name}`}</S.TagWrapper>
        ))}
        <p>{description}</p>
        <span>{answers.length ? `${answers.length.toLocaleString()} people have responded` : ''}</span>
      </S.QuestionContentWrapper>
      {!focused && (
        <PrimaryButton
          style={{ alignSelf: 'flex-end' }}
          label="Answer!"
          onClick={() => {
            console.log('TODO');
          }}
        />
      )}
      {/* 이건 좋지 않은 코드 */}
      {focused && selectedQuestionId && (
        <div style={{ alignSelf: 'flex-end' }} onClick={() => setSelectedQuestionId(null)}>
          <CancelButton />
        </div>
      )}
    </S.Container>
  );
};

export default QuestionWrapper;

// 여기서부터 막 짜기 시작함
const CancelButton: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="41" viewBox="0 0 42 41" fill="none">
      <line x1="41.3536" y1="0.353553" x2="1.35355" y2="40.3536" stroke="black" />
      <line x1="41.6601" y1="39.3667" x2="0.66012" y2="1.36671" stroke="black" />
    </svg>
  );
};
