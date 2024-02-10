export enum GetUserErrorsCode {
  Success = '200',
  Invalid = '400',
  NotFound = '404',
}

export enum AddUserErrorsCode {
  Success = '200',
  Invalid = '400',
}

export const isGetUserErrorCode = (value: string): value is GetUserErrorsCode => {
  return Object.values(GetUserErrorsCode).includes(value as GetUserErrorsCode);
};

export const isAddUserErrorCode = (value: string): value is AddUserErrorsCode => {
  return Object.values(AddUserErrorsCode).includes(value as AddUserErrorsCode);
};
