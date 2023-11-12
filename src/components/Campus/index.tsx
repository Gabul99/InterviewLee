import * as S from './index.style';
import Podium from './PodiumSection/Podium';
import Title from './PodiumSection/Title';
import RankTable from './RankSection/RankTable';

const PodiumSection: React.FC = () => {
  return (
    <S.Container>
      <Title />
      <Podium />
      <RankTable />
    </S.Container>
  );
};

export default PodiumSection;
