import { ErrorCodes } from '../types/errors';
import { User } from '../types/user';
import { validate } from 'uuid';

export const getUser = (path: string, userData: User[]) => {
  const userId = path.split('/').pop();

  if (userId) {
    if (validate(userId)) {
      const user = userData.find((item) => item.id === userId);

      if (user) {
        return user;
      }
      throw Error(ErrorCodes.NotFound);
    } else {
      throw Error(ErrorCodes.Invalid);
    }
  } else {
    throw Error(ErrorCodes.NotFound);
  }
};
