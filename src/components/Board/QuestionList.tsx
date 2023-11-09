import { mockQuestions } from '../../api/mocks/question.mock';
import PrimaryButton from '../Common/Button/PrimaryButton';
import QuestionContainer from './Question/Container';
import * as S from './QuestionList.style';

const QuestionList: React.FC = () => {
  return (
    <>
      <S.TitleWrapper>
        <h1>Question Board</h1>
        <PrimaryButton
          label="Post Question"
          onClick={() => {
            console.log('TODO');
          }}
        />
      </S.TitleWrapper>
      <S.QuestionWrapper>
        {mockQuestions.map((question) => (
          <QuestionContainer key={question.id} question={question} />
        ))}
      </S.QuestionWrapper>
    </>
  );
};

export default QuestionList;