import { GetUserErrorsCode } from '../types/errors';
import { User } from '../types/user';
import { validate } from 'uuid';

export const getUser = (path: string, userData: User[]) => {
  const userId = path.split('/').pop();

  if (userId) {
    if (validate(userId)) {
      return userData.find((item) => item.id === userId);
    } else {
      throw new Error(GetUserErrorsCode.Invalid);
    }
  } else {
    throw new Error(GetUserErrorsCode.NotFound);
  }
};
