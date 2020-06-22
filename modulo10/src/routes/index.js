import React from 'react';
import { useSelector } from 'react-redux';

import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
