import * as S from './UserProfile.style';
import TestImage from '../../../assets/profile.png';

const UserProfile: React.FC = () => {
  return (
    <S.Container>
      <S.ProfileImageContainer>
        <S.ProfileImage src={TestImage} />
      </S.ProfileImageContainer>
      <S.ProfileContent>
        <h2 className="name">Jaehee Lee</h2>
        <p className="user-id">User 123456</p>
        <S.ProfileActvities>
          <div className="row">
            <span>No. of Responses:</span>
            <span>15</span>
          </div>
          <div className="row">
            <span>No. of Questions:</span>
            <span>15</span>
          </div>
        </S.ProfileActvities>
      </S.ProfileContent>
    </S.Container>
  );
};

export default UserProfile;
