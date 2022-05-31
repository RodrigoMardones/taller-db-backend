import { basicEntityAttributes } from '../../interfaces/index';
export default interface PatientAttributes extends basicEntityAttributes{
    id?: number;
    id_user?: number;
    id_medical_Insurance: number;
    dni_employee: string;
    createdAt?: Date;
    updatedAt?: Date;
}