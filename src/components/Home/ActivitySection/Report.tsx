import * as S from './Update.style';

const Report: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Reports</S.Title>
      <S.Content>
        <S.ContentTextType>
          <p>New Report has arrived for question:</p>
          <p className="highlight">“If you could travel back in time to meet any historical figure, who would it be and why? What would you ask them?”</p>
        </S.ContentTextType>
      </S.Content>
    </S.Container>
  );
};

export default Report;
