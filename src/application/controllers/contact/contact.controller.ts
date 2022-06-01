import { Body, JsonController, Post } from 'routing-controllers';
import CreateContactUseCase from '../../../domain/contact/usecases/contact.usecase';
import ContactDAL from '../../db/DAL/contact.dal';

@JsonController('/contact')
export default class ContactController {
  @Post('')
  async createContact(@Body() body: any) {
    return new CreateContactUseCase(new ContactDAL()).execute(body);
  }
}
