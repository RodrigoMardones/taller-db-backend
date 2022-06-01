import { Get, JsonController } from 'routing-controllers';
import HealthUseCase from '../../../domain/health/usecases/health.usecase';
@JsonController('/health')
export default class HealthController {
  @Get('')
  gethealth(): unknown {
    return new HealthUseCase().execute();
  }
}
