import { DAL } from "../../../domain/interfaces";
import { Professional } from "../models";
import { ProfessionalInput, ProfessionalOutput } from "../models/professional.model";

export default class ProfessionalDAL implements DAL<ProfessionalInput, ProfessionalOutput>{
    findAll(): Promise<ProfessionalOutput[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<ProfessionalOutput> {
        throw new Error("Method not implemented.");
    }
    async create(professionalAttrs : ProfessionalInput): Promise<ProfessionalOutput> {
        const professional = await Professional.create(professionalAttrs, { raw: true });
        return professional.get() as ProfessionalOutput;
    }
}