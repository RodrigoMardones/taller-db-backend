import { Controller, Get } from 'routing-controllers';
import HealthUseCase from '../../../domain/health/usecases/health.usecase';
@Controller('/health')
class HealthController {
  @Get('')
  gethealth(): unknown {
    return new HealthUseCase().execute();
  }
}

export default HealthController;