import { UseCase, DAL } from '../../interfaces';
import ScheduleDAL from '../../../application/db/DAL/schedule.dal';
import Schedule from '../../../application/db/models/schedule.model';

export default class FindScheduleByProfessionalUseCase
  implements UseCase<unknown, unknown>
{
  constructor(private readonly scheduleDAL: ScheduleDAL) {}
  async execute(id_professional?: unknown): Promise<unknown> {
    return await this.scheduleDAL.findAll({
      id_professional
    } as Partial<Schedule>);
  }
}
