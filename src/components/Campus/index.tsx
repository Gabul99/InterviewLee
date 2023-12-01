import { useEffect, useState } from 'react';
import * as S from './index.style';
import Podium from './PodiumSection/Podium';
import Title from './PodiumSection/Title';
import RankTable from './RankSection/RankTable';
import { Campus } from '../../models/Common/Campus';
import { getCampus } from '../../repository/Campus';

const PodiumSection: React.FC = () => {
  const [campusData, setCampusData] = useState<Campus[]>();

  useEffect(() => {
    getCampus().then((data) => setCampusData(data));
  }, []);

  return (
    <S.Container>
      <Title />
      {campusData && (
        <>
          <Podium campus={campusData} />
          <RankTable campus={campusData} />
        </>
      )}
    </S.Container>
  );
};

export default PodiumSection;
