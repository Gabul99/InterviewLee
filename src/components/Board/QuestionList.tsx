import { useEffect, useState } from 'react';
import { mockQuestions } from '../../api/mocks/question.mock';
import PrimaryButton from '../Common/Button/PrimaryButton';
import QuestionContainer from './Question/Container';
import * as S from './QuestionList.style';
import QuestionPost from './QuestionPost';
import { addUser, getUsers } from '../../repository/User';

const QuestionList: React.FC = () => {
  const [postQuestionModalOpen, setPostQuestionModalOpen] = useState(false);

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
          {mockQuestions.map((question) => (
            <QuestionContainer key={question.id} question={question} />
          ))}
        </S.QuestionWrapper>
      )}
    </>
  );
};

export default QuestionList;
