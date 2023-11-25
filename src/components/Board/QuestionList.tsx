import { useEffect, useState } from 'react';
import PrimaryButton from '../Common/Button/PrimaryButton';
import QuestionContainer from './Question/Container';
import * as S from './QuestionList.style';
import QuestionPost from './QuestionPost';
import { getQuestions } from '../../repository/Question';
import { Question } from '../../models/Board/Question';
import { useAuthContext } from '../../context/Auth';

const QuestionList: React.FC = () => {
  const { profile, setLoginModalOpen } = useAuthContext();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [postQuestionModalOpen, setPostQuestionModalOpen] = useState(false);

  const handleClosePostModal = () => {
    setPostQuestionModalOpen(false);
  };

  // NOTE: 질문 생성 모달의 노출 여부에 따라서도 subscribe 해야함
  useEffect(() => {
    getQuestions().then((data) => setQuestions(data ?? []));
  }, [postQuestionModalOpen]);

  return (
    <>
      <S.TitleWrapper>
        <h1>Question Board</h1>
        <PrimaryButton
          label={postQuestionModalOpen ? 'Cancel' : 'Post Question'}
          onClick={() => {
            if (!profile) {
              setLoginModalOpen(true);
              return;
            }
            setPostQuestionModalOpen(!postQuestionModalOpen);
          }}
        />
      </S.TitleWrapper>
      {postQuestionModalOpen && <QuestionPost onClose={handleClosePostModal} />}
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
