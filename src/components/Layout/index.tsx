import GNB from './GNB';
import { Outlet } from 'react-router-dom';
import * as S from './index.style';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout: React.FC = () => {
  return (
    <S.main>
      <S.layout>
        <GNB />
        <S.OutletContainer>
          <Outlet />
        </S.OutletContainer>
        <ToastContainer autoClose={5000} position="bottom-right" />
      </S.layout>
    </S.main>
  );
};

export default Layout;
