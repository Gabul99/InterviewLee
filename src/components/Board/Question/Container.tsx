import { useEffect, useState } from 'react';
import { Question } from '../../../models/Board/Question';

import * as S from './Container.style';
import QuestionWrapper from './QuestionPreview';
import RecentAnswerList from './RecentAnswerList';
import AnswerInput from './AnswerInput';
import { getAnswerByQuestionId } from '../../../repository/Answer';
import { Answer } from '../../../models/Board/Answer';
import { useAuthContext } from '../../../context/Auth';

interface Props {
  question: Question;
}

// NOTE: 적당한 네이밍 고민 필요
const QuestionContainer: React.FC<Props> = (props) => {
  const { question } = props;
  const { profile } = useAuthContext();

  const [answers, setAnswers] = useState<Answer[]>([]);
  const [focused, setFocused] = useState(false);

  const myAnswer = answers.filter((answer) => answer.authorId === profile.id)[0] ?? undefined;

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    getAnswerByQuestionId(question.id).then((data) => {
      setAnswers(data ?? []);
    });
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setFocused((prev) => !prev);
  };

  return (
    <S.Container focused={focused}>
      <QuestionWrapper focused={focused} question={question} onClick={onClick} />
      {focused && (
        <>
          <AnswerInput question={question} myAnswer={myAnswer} refresh={refresh} />
          {answers.length ? <RecentAnswerList id={question.id} answers={answers} /> : null}
        </>
      )}
    </S.Container>
  );
};

export default QuestionContainer;
