import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export enum AuthStatus {
  Loading = 'loading',
  Authorized = 'authorized',
  Unauthorized = 'unauthorized',
}

export const getStorageData = () => Promise.all([AsyncStorage.getItem('token'), AsyncStorage.getItem('ip')]);

export const useAuth = () => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.Loading);

  useEffect(() => {
    getStorageData().then(([token, ip]) => {
      if (token && ip) {
        setAuthStatus(AuthStatus.Authorized);
      } else {
        setAuthStatus(AuthStatus.Unauthorized);
      }
    });
  }, []);

  return { authStatus };
};
