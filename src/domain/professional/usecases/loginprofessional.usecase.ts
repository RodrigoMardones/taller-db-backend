import { DAL, UseCase } from '../../interfaces/index';
import ISessionRepository from '../repositories/session.repository';
import ProfessionalAttributes from '../models/professional.model';
import { LoginProfessionalAttributes } from '../models/auth.model';
import IProfessionalRepository from '../repositories/professional.repository';

export default class LoginProfessionalUseCase
  implements UseCase<unknown, unknown>
{
  constructor(
    private readonly sessionRepository: ISessionRepository,
    private readonly professionalRepository: IProfessionalRepository
  ) {}
  async execute(data: unknown): Promise<unknown> {
    const d = data as LoginProfessionalAttributes;
    const { password, username } = d;
    const profesionalExist = (await this.professionalRepository.findOne({
      username
    })) as Required<ProfessionalAttributes>;
    if (!profesionalExist) {
      throw new Error('[LoginProfessionalUseCase] Professional Not Found');
    }
    const passwordValidation = await this.professionalRepository.validate(
      profesionalExist as ProfessionalAttributes,
      password
    );
    if (!passwordValidation) {
      throw new Error(
        '[LoginProfessionalUseCase] invalid username or password'
      );
    }
    const key = String(profesionalExist.id);
    const existSession = await this.sessionRepository.isAuth(key);
    if (existSession) {
      this.sessionRepository.destroy(key);
      return await this.sessionRepository.findOrCreate(key);
    }
    return await this.sessionRepository.findOrCreate(key);
  }
}
