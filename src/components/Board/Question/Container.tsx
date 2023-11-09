import { useState } from 'react';
import { Question } from '../../../models/Board/Question';

import * as S from './Container.style';
import QuestionWrapper from './QuestionPreview';
import RecentAnswerList from './RecentAnswerList';
import AnswerInput from './AnswerInput';

interface Props {
  question: Question;
}

// NOTE: 적당한 네이밍 고민 필요
const QuestionContainer: React.FC<Props> = (props) => {
  const { question } = props;

  const [focused, setFocused] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setFocused((prev) => !prev);
  };

  return (
    <S.Container focused={focused}>
      <QuestionWrapper
        focused={focused}
        question={question}
        onClick={onClick}
      />
      {focused && (
        <>
          <AnswerInput />
          {question.answers.length ? (
            <RecentAnswerList answers={question.answers} />
          ) : null}
        </>
      )}
    </S.Container>
  );
};

export default QuestionContainer;
