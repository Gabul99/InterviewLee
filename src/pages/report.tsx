import * as S from './report.style';

const Report: React.FC = () => {
  return (
    <S.Container>
      <S.Header>Reports</S.Header>
      <S.Body>
        <S.LeftListArea>
          <h2 className="title">List</h2>
        </S.LeftListArea>
        <S.Contents>contents</S.Contents>
      </S.Body>
    </S.Container>
  );
};

export default Report;
