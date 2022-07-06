import { DAL, UseCase } from '../../interfaces';
import BlockAttributes from '../models/block.model';

export default class FindAllBlocksUseCase implements UseCase<unknown, unknown> {
  constructor(private readonly blockDAL: DAL<BlockAttributes, unknown>) {}
  async execute(): Promise<BlockAttributes[]> {
    return (await this.blockDAL.findAll()) as BlockAttributes[];
  }
}
