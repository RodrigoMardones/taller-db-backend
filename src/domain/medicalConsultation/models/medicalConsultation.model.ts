import { basicEntityAttributes } from "../../interfaces";

export default interface MedicalConsultationAttributes extends basicEntityAttributes {
    id?: number;
    id_patient: number;
    id_schedule: number;
    createdAt?: Date;
    updatedAt?: Date;
}

