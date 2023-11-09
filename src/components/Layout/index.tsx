import GNB from './GNB';
import { Outlet } from 'react-router-dom';
import * as S from './index.style';

const Layout: React.FC = () => {
  return (
    <S.main>
      <S.layout>
        <GNB />
        <S.OutletContainer>
          <Outlet />
        </S.OutletContainer>
      </S.layout>
    </S.main>
  );
};

export default Layout;
