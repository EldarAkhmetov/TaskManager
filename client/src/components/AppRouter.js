import React from 'react';
import { useSelector } from 'react-redux';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { LOGIN_ROUTE, TASKS_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.authReducer);
  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component />} exact/>
      )}
      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component />} exact/>
      )}
      {isAuth && <Route path={LOGIN_ROUTE} element={<Navigate replace to={TASKS_ROUTE} />} />}

      <Route path="*" element={<Navigate replace to={TASKS_ROUTE} />} />     
    </Routes>
  );
};

export default AppRouter;