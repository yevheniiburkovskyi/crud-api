import { ErrorCodes } from '../types/errors';

export const GET_USER_STATUSES: Partial<Record<ErrorCodes, string>> = {
  [ErrorCodes.Success]: 'Success',
  [ErrorCodes.Invalid]: 'Invalid ID',
  [ErrorCodes.NotFound]: 'User not found',
};

export const ADD_USER_STATUSES: Partial<Record<ErrorCodes, string>> = {
  [ErrorCodes.Success]: 'Success',
  [ErrorCodes.Invalid]: 'Invalid body',
};

export const DELETE_USER_STATUSES: Partial<Record<ErrorCodes, string>> = {
  [ErrorCodes.SuccessDelete]: 'Success',
  [ErrorCodes.Invalid]: 'Invalid ID',
  [ErrorCodes.NotFound]: 'User not found',
};
