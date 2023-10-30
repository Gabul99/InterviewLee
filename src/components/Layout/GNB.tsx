import { useRouter, RoutePath } from '../../router/routing';
import { capitalizeFirstLetter } from '../../utils/format';
import * as S from './GNB.style';

const GNB = () => {
  const { pathname, push } = useRouter();

  const paths = ['/home', '/board', '/report', '/campus'];

  return (
    <S.main>
      <S.logo>InterviewLee</S.logo>
      <S.list>
        {paths.map((path) => (
          <S.item
            key={path}
            className={path === pathname ? 'selected' : ''}
            onClick={() => push(path as RoutePath)}
          >
            {capitalizeFirstLetter(path.split('/')[1])}
          </S.item>
        ))}
      </S.list>
    </S.main>
  );
};

export default GNB;
