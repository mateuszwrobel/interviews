import React, { useEffect } from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuthMethods } from '../contexts/authMethodsContext';
import { routes } from '../routes';

export function ProtectedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthMethods();
  const isAuth = isAuthenticated();

  useEffect(() => {
    if (!isAuth) {
      navigate(routes.signin);
    }
  }, [isAuth]);
  if (!isAuth) {
    return null;
  }
  return children;
}
