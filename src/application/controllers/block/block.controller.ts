import { Body, Controller, Get, Post } from 'routing-controllers';
import CreateBlockUsecase from '../../../domain/block/usecases/createblock.usecase';
import BlockDAL from '../../db/DAL/block.dal';
import FindAllBlocksUseCase from '../../../domain/block/usecases/findallblocks.usecase';

@Controller('/Block')
export default class BlockController {
  @Post('/create')
  async createBlock(@Body() body: unknown): Promise<unknown> {
    return await new CreateBlockUsecase(new BlockDAL()).execute(body);
  }
  @Get('')
  async findAllBlock(): Promise<unknown> {
    return await new FindAllBlocksUseCase(new BlockDAL()).execute();
  }
}
