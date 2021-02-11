import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);

export const socket = io('http://46.101.178.144:8080');

enum Status {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  WARRING = 'warring',
}

export type BadgeStatusType = 0 | 1 | 2;

export interface Socket {
  connectionStatus: Status;
  badgeStatus: number;
  devicesList: number;
}

export const useSocket = () => {
  const [connectionStatus, setConnectionStatus] = useState(Status.DISCONNECTED);
  const [badgeStatus, setBadgeStatus] = useState(1);
  const [devicesList, setDevicesList] = useState(1);

  const handleConnectionStatus = (status: Status, badge: BadgeStatusType) => {
    setConnectionStatus(status);
    setBadgeStatus(badge);
  };

  const handleReconnect = () => {
    socket.connect();

    if (!socket.connected) {
      setTimeout(handleReconnect, 2500);
    }
  };

  useEffect(() => {
    socket.on('reconnect', () => handleConnectionStatus(Status.WARRING, 0));

    socket.on('disconnect', () => {
      handleConnectionStatus(Status.DISCONNECTED, 1);
      handleReconnect();
    });

    socket.on('devices', data => {
      setDevicesList(data.devices);
    });

    socket.on('connect', () => handleConnectionStatus(Status.CONNECTED, 2));

    if (!socket.connected) {
      handleReconnect();
    }
  }, []);

  return {
    connectionStatus,
    badgeStatus,
    devicesList,
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
