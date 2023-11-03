import QA from './QA';
import Update from './Update';
import * as S from './index.style';

const ActivitySection: React.FC = () => {
  return (
    <S.Container>
      <Update />
      <QA />
    </S.Container>
  );
};

export default ActivitySection;
