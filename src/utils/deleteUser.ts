import { ErrorCodes } from '../types/errors';
import { User } from '../types/user';
import { validate } from 'uuid';
import fsp from 'fs/promises';
import path from 'path';

export const deleteUser = async (url: string, usersData: User[]): Promise<User | undefined> => {
  const userId = url.split('/').pop();

  if (userId) {
    if (validate(userId)) {
      const deletedUser = usersData.find((item) => item.id === userId);

      const filteredUsers = usersData.filter((item) => item.id !== userId);

      await fsp.writeFile(
        path.join(__dirname, '..', 'db', 'db.json'),
        JSON.stringify(filteredUsers)
      );

      if (deletedUser) {
        return deletedUser;
      }
      throw Error(ErrorCodes.NotFound);
    } else {
      throw Error(ErrorCodes.Invalid);
    }
  } else {
    throw Error(ErrorCodes.NotFound);
  }
};
