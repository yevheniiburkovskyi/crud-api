import { AddUserErrorsCode } from '../types/errors';
import { User, isUserData } from '../types/user';
import { v4 as uuidv4 } from 'uuid';
import fsp from 'fs/promises';
import path from 'path';

export const addUser = async (userData: User, usersData: User[]): Promise<User> => {
  if (isUserData(userData)) {
    const user = { ...userData, id: uuidv4() };

    const updatedUserData = [...usersData, user];

    await fsp.writeFile(
      path.join(__dirname, '..', 'db', 'db.json'),
      JSON.stringify(updatedUserData)
    );

    return user;
  } else {
    throw Error(AddUserErrorsCode.Invalid);
  }
};
