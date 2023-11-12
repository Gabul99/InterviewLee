import * as S from './Update.style';

const Feedback: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Feedback</S.Title>
      <S.Content>
        <S.ContentTextType>
          <p>User 2344523 has left feedback for question: </p>
          <p className="highlight">“If you could travel back in time to meet any historical figure, who would it be and why? What would you ask them?”</p>
        </S.ContentTextType>
        <S.ContentTextType>
          <p>User 134234 has left feedback for question: </p>
          <p className="highlight">“If you could travel back in time to meet any historical figure, who would it be and why? What would you ask them?”</p>
        </S.ContentTextType>
      </S.Content>
    </S.Container>
  );
};

export default Feedback;
