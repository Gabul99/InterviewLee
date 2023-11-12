import { getDBData, setDBData } from '../firebase/Firebase';
import { User } from '../models/Common/User';

export const getUsers = async () => {
  const data = await getDBData();
  return data.users ?? undefined;
};

export const addUser = async (user: User) => {
  const users = await getUsers();
  if (users === undefined) {
    await setDBData('users', [user]);
  } else {
    await setDBData('users', [...users, user]);
  }
};
