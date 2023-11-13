import * as S from './UserProfile.style';
import TestImage from '../../../assets/profile.png';
import { useAuthContext } from '../../../context/Auth';

const UserProfile: React.FC = () => {
  const { profile } = useAuthContext();

  return (
    <S.Container>
      <S.ProfileImageContainer>
        <S.ProfileImage src={TestImage} />
      </S.ProfileImageContainer>
      <S.ProfileContent>
        <h2 className="name">{profile.name}</h2>
        <p className="user-id">{`User ID: ${profile.id}`}</p>
        <S.ProfileActvities>
          <div className="row">
            <span>No. of Responses:</span>
            <span>{profile.question_no}</span>
          </div>
          <div className="row">
            <span>No. of Questions:</span>
            <span>{profile.response_no}</span>
          </div>
        </S.ProfileActvities>
      </S.ProfileContent>
    </S.Container>
  );
};

export default UserProfile;
