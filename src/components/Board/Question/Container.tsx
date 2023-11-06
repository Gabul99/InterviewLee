import { useState } from 'react';
import { Question } from '../../../models/Board/Question';

import * as S from './Container.style';

interface Props {
  question: Question;
}

// NOTE: 적당한 네이밍 고민 필요
const QuestionContainer: React.FC<Props> = (props) => {
  const { question } = props;

  const [focused, setFocused] = useState(false);

  const onClick = () => {
    setFocused((prev) => !prev);
  };

  return (
    <S.Container focused={focused} onClick={onClick}>
      <QuestionWrapper question={question} />
    </S.Container>
  );
};

export default QuestionContainer;

interface QuestionWrapperProps {
  question: Question;
}

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({
  question,
}: QuestionWrapperProps) => {
  const { description, answers, tags } = question;

  return (
    <S.QuestionWrapper>
      <h2>Q:</h2>
      <S.QuestionContentWrapper>
        {tags.map((tag) => (
          <div key={tag.name}>태그: ${tag.name}</div>
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
