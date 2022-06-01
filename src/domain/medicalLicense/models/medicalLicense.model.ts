import { basicEntityAttributes } from "../../interfaces";

export default interface MedicalLicenseAttributes extends basicEntityAttributes {
    id?: number;
    id_professional: number;
    id_patient: number;
    id_state: number;
    id_licenseType: number;
    createdAt?: Date;
    updatedAt?: Date;
}