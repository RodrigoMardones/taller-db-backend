import { DAL, UseCase } from '../../interfaces';
import SpecialityAttributes from '../models/speciality.model';
export default class CreateSpecialityUseCase implements UseCase<unknown, unknown> {
    constructor( private readonly specialityDAL : DAL<SpecialityAttributes, unknown>) {}
    async execute(data: unknown) {
        const d = data as SpecialityAttributes;
        const createdSpeciality = await this.specialityDAL.create(d);
        return createdSpeciality;
    } 
}