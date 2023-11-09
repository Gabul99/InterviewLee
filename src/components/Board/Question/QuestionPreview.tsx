import { Question } from '../../../models/Board/Question';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import * as S from './QuestionPreview.style';

interface QuestionWrapperProps {
  focused: boolean;
  question: Question;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({
  focused,
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
      {!focused && (
        <PrimaryButton
          style={{ alignSelf: 'flex-end' }}
          label="Answer!"
          onClick={() => {
            console.log('TODO');
          }}
        />
      )}
    </S.QuestionWrapper>
  );
};

export default QuestionWrapper;
