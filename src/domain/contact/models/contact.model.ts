import { basicEntityAttributes } from '../../interfaces';
export default interface ContactAttributes extends basicEntityAttributes{
    id?: number;
    address: string;
    phone: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}