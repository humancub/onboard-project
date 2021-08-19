export interface IGetUsersResponse {
  data: IUser[];
}

export interface IUser {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: string;
  dateOfBirth: string;
  location: string;
  phone: string;
  registerDate: string;
  updatedDate: string;
}
