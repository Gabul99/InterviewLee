import { Question } from '../../../models/Board/Question';
import * as S from './QuestionPreview.style';

interface QuestionWrapperProps {
  question: Question;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({
  question,
  onClick,
}: QuestionWrapperProps) => {
  const { description, answers, tags } = question;

  return (
    <S.QuestionWrapper onClick={onClick}>
      <h2>Q:</h2>
      <S.QuestionContentWrapper>
        {tags.map((tag) => (
          <S.TagWrapper key={tag.name}>{`#${tag.name}`}</S.TagWrapper>
        ))}
        <p>{description}</p>
        <span>
          {answers.length
            ? `${answers.length.toLocaleString()} people have responded`
            : ''}
        </span>
      </S.QuestionContentWrapper>
    </S.QuestionWrapper>
  );
};

export default QuestionWrapper;
