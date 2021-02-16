import io from 'socket.io-client';
import { useState } from 'react';
import { YellowBox } from 'react-native';
import { getStorageData } from './useAuth';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);

let socket = null;

export const setupSockets = async () => {
  const [token, ip] = await getStorageData();

  socket = io(ip, {
    query: {
      token,
    },
  });
};

export const useSockets = () => {
  const [isLoading, setIsLoading] = useState(true);

  setupSockets().then(() => setIsLoading(false));

  return {
    isLoading,
  };
};

export const useSocketStatus = () => {
  const [isConnected, setIsConnected] = useState(false);

  socket.on('connect', () => setIsConnected(true));
  socket.on('disconnect', () => setIsConnected(false));

  return {
    isConnected,
  };
};

export const openEvent = () => {
  socket.emit('open', {});
};

export const colorEvent = (color: string | { time: number; color: string }[]) => {
  socket.emit('color', { color });
};

export const loadColorEvent = (callback: (_: string) => void) => {
  socket.once('color', callback);
};

export const sendNotificationToken = (token: string) => {
  socket.emit('notification_token', { token });
};
