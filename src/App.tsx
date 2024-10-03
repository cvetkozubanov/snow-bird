import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AuthContext } from '@/contexts';
import { Login, TestFeature } from '@/features';

import AppTheme from './features/shared-theme/AppTheme';

export const App = (props: { disableCustomTheme?: boolean }) => {
  const { user: currentUser } = useContext(AuthContext);
  let routes = null;
  if (currentUser) {
    routes = (
      <Routes>
        <Route path='/' element={<TestFeature />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    );
  }

  return (
    <BrowserRouter>
      <AppTheme {...props}>{routes}</AppTheme>
    </BrowserRouter>
  );
};
