import { basicEntityAttributes } from '../../interfaces';
export default interface MedicalInsuranceAttributes extends basicEntityAttributes{
    id?: number;
    name: string;
    description: string;
    image: string;
    externalCode: string;
    createdAt?: Date;
    updatedAt?: Date;
}