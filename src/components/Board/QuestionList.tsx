import { useEffect, useState } from 'react';
import PrimaryButton from '../Common/Button/PrimaryButton';
import QuestionContainer from './Question/Container';
import * as S from './QuestionList.style';
import QuestionPost from './QuestionPost';
import { getQuestions } from '../../repository/Question';
import { Question } from '../../models/Board/Question';

const QuestionList: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [postQuestionModalOpen, setPostQuestionModalOpen] = useState(false);

  useEffect(() => {
    getQuestions().then((data) => setQuestions(data ?? []));
  }, []);

  return (
    <>
      <S.TitleWrapper>
        <h1>Question Board</h1>
        <PrimaryButton
          label={postQuestionModalOpen ? 'Cancel' : 'Post Question'}
          onClick={() => {
            setPostQuestionModalOpen(!postQuestionModalOpen);
          }}
        />
      </S.TitleWrapper>
      {postQuestionModalOpen && <QuestionPost onClose={() => setPostQuestionModalOpen(false)} />}
      {!postQuestionModalOpen && (
        <S.QuestionWrapper>
          {questions.map((question) => (
            <QuestionContainer key={question.id} question={question} />
          ))}
        </S.QuestionWrapper>
      )}
    </>
  );
};

export default QuestionList;
