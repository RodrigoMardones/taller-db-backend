import { basicEntityAttributes } from '../../interfaces/index';
export default interface SpecialityAttributes extends basicEntityAttributes{
    id?: number;
    name: string;
    value: number;
    currency: number;
    createdAt?: Date;
    updatedAt?: Date;
}