export enum ErrorCodes {
  Success = '200',
  SuccessDelete = '204',
  Invalid = '400',
  NotFound = '404',
}

export const isUserErrorCode = (value: string): value is ErrorCodes => {
  return Object.values(ErrorCodes).includes(value as ErrorCodes);
};
