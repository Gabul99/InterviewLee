import { useEffect, useMemo, useState } from 'react';
import PrimaryButton from '../Common/Button/PrimaryButton';
import QuestionContainer from './Question/Container';
import * as S from './QuestionList.style';
import QuestionPost from './QuestionPost';
import { getQuestions } from '../../repository/Question';
import { Question } from '../../models/Board/Question';
import { useAuthContext } from '../../context/Auth';
import QuestionFilters from './QuestionFilters';

const QuestionList: React.FC = () => {
  const { profile, setLoginModalOpen } = useAuthContext();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [postQuestionModalOpen, setPostQuestionModalOpen] = useState(false);
  const [positionFilters, setPositionFilters] = useState<string[]>([]);
  const [tagFilters, setTagFilters] = useState<string[]>([]);

  const filteredQuestions = useMemo(() => {
    let result = questions;
    if (tagFilters.length > 0) {
      result = result.filter((q) => q.tags.some((element) => tagFilters.includes(element)));
    }
    return result;
  }, [questions, tagFilters, positionFilters]);

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
      <QuestionFilters positionFilters={positionFilters} setPositionFilters={setPositionFilters} tagFilters={tagFilters} setTagFilters={setTagFilters} />
      {!postQuestionModalOpen && (
        <S.QuestionWrapper>
          {filteredQuestions.map((question) => (
            <QuestionContainer key={question.id} question={question} />
          ))}
        </S.QuestionWrapper>
      )}
      {filteredQuestions.length === 0 && <S.EmptyText>There is no questions that fits filter condition!</S.EmptyText>}
      {postQuestionModalOpen && <QuestionPost onClose={handleClosePostModal} />}
    </>
  );
};

export default QuestionList;
