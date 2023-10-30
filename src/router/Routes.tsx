import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Intro from '../pages/intro';
import Home from '../pages/home';
import Campus from '../pages/campus';
import Board from '../pages/board';
import Report from '../pages/report';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/intro" element={<Intro />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<Navigate replace to="/intro" />} />
      </Route>
    </ReactRouterRoutes>
  );
};
