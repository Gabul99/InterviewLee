import CampusSpirit from './CampusSpirit';
import UserProfile from './UserProfile';
import * as S from './index.style';

const ProfileSection: React.FC = () => {
  return (
    <S.Container>
      <UserProfile />
      <CampusSpirit />
    </S.Container>
  );
};

export default ProfileSection;
