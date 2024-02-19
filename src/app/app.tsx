import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { auth } from '@interviewspnpm/core';
import { Layout } from './components/layout';

const Forecast = lazy(() => {
  return import('@interviewspnpm/forecast').then((module) => ({
    default: module.Forecast,
  }));
});

const Auth = lazy(() => {
  return import('@interviewspnpm/auth').then((module) => ({
    default: module.Auth,
  }));
});

export function App() {
  return (
    <auth.AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={auth.routes.signin} element={<Auth />} />
            <Route
              path="/"
              element={
                <auth.ProtectedComponent>
                  <Forecast />
                </auth.ProtectedComponent>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </auth.AuthProvider>
  );
}

export default App;
