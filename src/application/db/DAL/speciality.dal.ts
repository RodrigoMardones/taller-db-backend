import { DAL } from "../../../domain/interfaces";
import { SpecialityInput, SpecialityOutput } from '../models/speciality.model';
import Speciality from '../models/speciality.model';
import Professional from '../models/professional.model';

export default class SpecialityDAL implements DAL<SpecialityInput, SpecialityOutput> {
    findOne(params: unknown): Promise<SpecialityOutput> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<SpecialityOutput[]> {
        const allSpecialities = await Speciality.findAll();
        return allSpecialities.map(speciality => speciality.get()) as SpecialityOutput[];
    }
    async create(payload: SpecialityInput): Promise<SpecialityOutput> {
        const createdSpeciality = await Speciality.create(payload);
        return createdSpeciality.get() as SpecialityOutput;
    }
    async getById(id: number): Promise<SpecialityOutput> {
        const speciality = await Professional.findByPk(id);
        return speciality?.get() as unknown as SpecialityOutput;

    }
    
}