export enum GetUserErrorsCode {
  Success = '200',
  Invalid = '400',
  NotFound = '404',
}

export const isGetUserErrorCode = (value: string): value is GetUserErrorsCode => {
  return Object.values(GetUserErrorsCode).includes(value as GetUserErrorsCode);
};
