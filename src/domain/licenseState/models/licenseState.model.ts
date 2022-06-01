import { basicEntityAttributes } from '../../interfaces/index';
export default interface LicenseStateAttributes extends basicEntityAttributes {
    id?: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}