import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import loadable from '@loadable/component';


const Home = loadable(() => import('../pages/Home'));
const Leagues = loadable(() => import('../pages/Leagues'));
const League = loadable(() => import('../pages/League'));
const Players = loadable(() => import('../pages/Players'));
const Player = loadable(() => import('../pages/Player'));
const ErrorPage = loadable(() => import('../pages/ErrorPage'));

const AppRouter = () => {
  return (

    <Routes>
      <Route path='/' element={<MainLayout></MainLayout>}>
        <Route index element={<Home />} />
        <Route path="leagues" element={<Leagues />}></Route>
        <Route path="leagues/:id" element={<League />} />
        <Route path="players" element={<Players />}></Route>
        <Route path="players/:id" element={<Player />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path='*' element={<Navigate to='/'></Navigate>}></Route>
      </Route>
    </Routes>


  );
};

export default AppRouter;
