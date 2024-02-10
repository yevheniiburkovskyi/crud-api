import { GetUserErrorsCode } from '../types/errors';

export const GET_USER_STATUSES: Record<GetUserErrorsCode, string> = {
  [GetUserErrorsCode.Success]: 'Success',
  [GetUserErrorsCode.Invalid]: 'Invalid ID',
  [GetUserErrorsCode.NotFound]: 'User not found',
};
