'use client';

import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { createContext } from 'react';

let session = {
  userInfo: {
    id: undefined,
    name: undefined,
    role: {
      id: undefined,
      name: undefined,
    },
  },
  isAuthenticated: false,
};

export const SessionContext = createContext(session);

export default function SessionProvider({ children }) {
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
    const decoded: any = jwt.decode(accessToken);
    session.userInfo = decoded.userInfo;
    session.isAuthenticated = true;
  }
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}
