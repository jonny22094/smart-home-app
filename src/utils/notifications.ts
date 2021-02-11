import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

let token = '';

const register = async () => {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted') {
    alert('You need to enable notification for expo app');
  }

  token = await Notifications.getExpoPushTokenAsync();

  return token;
};

const addListener = Notifications.addListener;

export default {
  token,
  register,
  addListener,
};
