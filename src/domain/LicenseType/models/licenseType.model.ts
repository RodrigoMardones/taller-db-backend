import { basicEntityAttributes } from '../../interfaces/index';
export default interface LicenseTypeAttributes extends basicEntityAttributes {
    id?: number;
    name: string;
    type_code: number;
    createdAt?: Date;
    updatedAt?: Date;
}