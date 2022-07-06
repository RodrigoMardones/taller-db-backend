import { UseCase, DAL } from '../../interfaces/index';
import ScheduleAttributes from '../models/schedule.model';

export default class CreateScheduleUseCase
  implements UseCase<unknown, unknown>
{
  constructor(private readonly scheduleDAL: DAL<ScheduleAttributes, unknown>) {}
  async execute(data: unknown): Promise<unknown> {
    const created = await this.scheduleDAL.create(data as ScheduleAttributes);
    return created;
  }
}
