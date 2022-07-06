import { DAL, UseCase } from '../../interfaces';
import BlockAttributes from '../models/block.model';

export default class CreateBlockUsecase
  implements UseCase<BlockAttributes, unknown>
{
  constructor(private readonly blockDAL: DAL<BlockAttributes, unknown>) {}
  async execute(data: unknown): Promise<unknown> {
    const created = await this.blockDAL.create(data as BlockAttributes);
    return created;
  }
}
