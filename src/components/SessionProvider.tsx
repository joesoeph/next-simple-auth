'use client';

import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { createContext, useContext } from 'react';

let defaultSession = {
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
let session = { ...defaultSession };

const SessionContext = createContext(defaultSession);
const SessionRefreshContext = createContext(() => {});

export function useSession() {
  return useContext(SessionContext);
}

export function useRefreshSession() {
  return useContext(SessionRefreshContext);
}

export default function SessionProvider({ children }) {
  function handleRefreshSession() {
    const accessToken = Cookies.get('accessToken');

    if (!accessToken) {
      session = { ...defaultSession };
      return;
    }

    const decoded: any = jwt.decode(accessToken);
    session.userInfo = decoded.userInfo;
    session.isAuthenticated = true;
  }

  handleRefreshSession();

  return (
    <SessionContext.Provider value={session}>
      <SessionRefreshContext.Provider value={handleRefreshSession}>
        {children}
      </SessionRefreshContext.Provider>
    </SessionContext.Provider>
  );
}
