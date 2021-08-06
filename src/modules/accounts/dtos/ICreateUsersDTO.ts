interface ICreateUsersDTO {
  name: string;
  email: string;
  password: string;
  drive_license: string;
  id?: string;
  avatar?: string;
}

export { ICreateUsersDTO };
