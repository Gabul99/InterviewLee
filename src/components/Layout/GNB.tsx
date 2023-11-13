import { useRouter, RoutePath } from '../../router/routing';
import * as S from './GNB.style';

import ProfileImage from '../../assets/profile.png';
import { useAuthContext } from '../../context/Auth';

const GNB = () => {
  const { profile } = useAuthContext();
  const { pathname, push } = useRouter();

  const paths = ['/', '/board', '/report', '/campus'];

  const getPathName = (path: string) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/board':
        return 'Question Board';
      case '/report':
        return 'Reports';
      case '/campus':
        return 'Campus Spirit';
      default:
        return '';
    }
  };

  return (
    <S.main>
      <S.logo>
        <h3>Interview</h3>
        <h3 className="highlight">Lee</h3>
      </S.logo>
      <S.list>
        {paths.map((path) => (
          <S.item key={path} className={path === pathname ? 'selected' : ''} onClick={() => push(path as RoutePath)}>
            {getPathName(path)}
          </S.item>
        ))}
      </S.list>
      <S.ProfileWrapper>
        <S.Profile>
          <img src={ProfileImage} alt="profile" />
          <div className="content">
            <span className="name">{profile.name}</span>
            <span>{profile.campus}</span>
          </div>
        </S.Profile>
        <p>2023 © InterviewLee</p>
      </S.ProfileWrapper>
    </S.main>
  );
};

export default GNB;
