export interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export const isUserData = (userData: User): userData is User => {
  return (
    typeof userData === 'object' &&
    typeof userData.username === 'string' &&
    typeof userData.age === 'number' &&
    Array.isArray(userData.hobbies) &&
    userData.hobbies.every((hobby) => typeof hobby === 'string')
  );
};
