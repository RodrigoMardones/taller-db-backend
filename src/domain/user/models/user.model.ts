export default interface UserAttributes {
  id?: number;
  dni: string;
  names: string;
  surnames: string;
  birthdate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
