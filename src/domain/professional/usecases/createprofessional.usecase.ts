import { UseCase, DAL } from '../../interfaces/index';
import ProfessionalAttributes from '../models/professional.model';
import UserAttributes from '../../user/models/user.model';
import SpecialityAttributes from '../../speciality/models/speciality.model';

export default class CreateProfessionalUseCase implements UseCase<unknown, unknown>{
    constructor(
        private readonly professionalDAL: DAL<ProfessionalAttributes,any>,
    ) {}
    async execute(data: unknown): Promise<unknown> {
        const d  = data as ProfessionalAttributes;
        const createdProfessional = await this.professionalDAL.create(d);
        return createdProfessional;
    }
}