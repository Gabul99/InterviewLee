import Feedback from './Feedback';
import Questions from './Questions';
import Report from './Report';
import Responses from './Responses';
import * as S from './index.style';

const ActivitySection: React.FC = () => {
  return (
    <S.Container>
      <h2>Updates!</h2>
      <S.UpdateWrapper>
        <S.Row>
          <S.Content>
            <Report />
          </S.Content>
          <S.Content>
            <Questions />
          </S.Content>
        </S.Row>
        <S.Row>
          <S.Content>
            <Feedback />
          </S.Content>
          <S.Content>
            <Responses />
          </S.Content>
        </S.Row>
      </S.UpdateWrapper>
    </S.Container>
  );
};

export default ActivitySection;
