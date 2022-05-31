import { basicEntityAttributes } from '../../interfaces';
export default interface ProfessionalAttributes extends basicEntityAttributes{
    id?: number;
    id_speciality: number;
    id_user: number;
    username: string;
    password: string;
    linkToConsultation: string;
    createdAt?: Date;
    updatedAt?: Date;
}