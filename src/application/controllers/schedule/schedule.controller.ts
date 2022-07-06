import { Controller, Post, Get, Body, Param } from 'routing-controllers';
import CreateScheduleUseCase from '../../../domain/schedule/usecases/createschedule.usecase';
import ScheduleDAL from '../../db/DAL/schedule.dal';
import FindScheduleByProfessionalUseCase from '../../../domain/schedule/usecases/findschedulebyprofessional.usecase';

@Controller('/schedule')
export default class ScheduleController {
  @Post('/create')
  async createSchedule(@Body() body: unknown): Promise<unknown> {
    return await new CreateScheduleUseCase(new ScheduleDAL()).execute(body);
  }
  @Get('/professional/:id')
  async findAllByProfessionalId(@Param('id') id: number): Promise<unknown> {
    return await new FindScheduleByProfessionalUseCase(
      new ScheduleDAL()
    ).execute(id);
  }
}
