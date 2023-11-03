import ActivitySection from '../components/Home/ActivitySection';
import ProfileSection from '../components/Home/ProfileSection';
import * as S from './home.style';

const Home: React.FC = () => {
  return (
    <S.Container>
      <ProfileSection />
      <ActivitySection />
    </S.Container>
  );
};

export default Home;
