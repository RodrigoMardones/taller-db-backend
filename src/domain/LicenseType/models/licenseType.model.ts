import { basicEntityAttributes } from '../../interfaces/index';
export default interface LicenseTypeAttributes extends basicEntityAttributes {
  id?: number;
  name: string;
  externalCode: number;
  createdAt?: Date;
  updatedAt?: Date;
}
