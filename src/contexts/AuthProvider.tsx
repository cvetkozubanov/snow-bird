import { createContext, useEffect, useState } from 'react';

import axios from 'axios';
import { getAuth } from 'firebase/auth';

type fakeAuthContextProps = {
  user: string | null | undefined;
  login: (email: string, pass: string) => Promise<string> | undefined;
  logout: () => void;
};

const initialContext: fakeAuthContextProps = {
  user: '',
  login: () => undefined,
  logout: () => void 0
};

export const AuthContext = createContext(initialContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = getAuth();
  const [user, setUser] = useState('');

  useEffect(() => {
    axios.interceptors.request.use(
      async (config) => {
        if (config && config.headers) {
          const token = await getAuth().currentUser?.getIdToken();
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );
  }, []);

  const login = (email: string, password: string) => {
    //signInWithEmailAndPassword(auth, email, password);
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        setUser(email);
        resolve(email);
      }, 2000);
    });
  };

  const logout = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser('');
        resolve();
      }, 2000);
    });
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
