import { useRouter } from '../../router/routing';
import * as S from './GNB.style';

const GNB = () => {
  const router = useRouter();

  return (
    <S.main>
      <h3>InterviewLee</h3>
      <S.list>
        <li onClick={() => router.push('/')}>Home</li>
        <li onClick={() => router.push('/board')}>Question Board</li>
        <li onClick={() => router.push('/report')}>Reports</li>
        <li onClick={() => router.push('/campus')}>Campus Spirit</li>
      </S.list>
    </S.main>
  );
};

export default GNB;
