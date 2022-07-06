import { Body, Controller, Post } from 'routing-controllers';
import CreateBlockUsecase from '../../../domain/block/usecases/createblock.usecase';
import BlockDAL from '../../db/DAL/block.dal';

@Controller('/Block')
export default class BlockController {
  @Post('/create')
  async createBlock(@Body() body: unknown) {
    return await new CreateBlockUsecase(new BlockDAL()).execute(body);
  }
}
