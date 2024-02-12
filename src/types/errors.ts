export enum ErrorCodes {
  Success = '200',
  Invalid = '400',
  NotFound = '404',
}

export const isGetUserErrorCode = (value: string): value is ErrorCodes => {
  return Object.values(ErrorCodes).includes(value as ErrorCodes);
};

export const isAddUserErrorCode = (value: string): value is ErrorCodes => {
  return Object.values(ErrorCodes).includes(value as ErrorCodes);
};
