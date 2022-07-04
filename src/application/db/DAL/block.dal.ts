import { DAL } from '../../../domain/interfaces';
import Block, { BlockInput, BlockOutput } from '../models/block.model';

export default class BlockDAL implements DAL<BlockInput, BlockOutput> {
  async create(blockAttrs: BlockInput): Promise<BlockOutput> {
    const block = await Block.create(blockAttrs);
    return block.toJSON() as BlockOutput;
  }
  getById(id: number): Promise<BlockOutput> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<BlockOutput[]> {
    const result = await Block.findAll();
    return result.map((block) => block.toJSON()) as BlockOutput[];
  }
  findOne(params: unknown): Promise<BlockOutput> {
    throw new Error('Method not implemented.');
  }
}
