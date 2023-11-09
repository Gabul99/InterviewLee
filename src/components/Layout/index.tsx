import GNB from './GNB';
import { Outlet } from 'react-router-dom';
import * as S from './index.style';
import Footer from './footer';

const Layout: React.FC = () => {
  return (
    <S.main>
      <S.layout>
        <GNB />
        <Outlet />
      </S.layout>
    </S.main>
  );
};

export default Layout;
