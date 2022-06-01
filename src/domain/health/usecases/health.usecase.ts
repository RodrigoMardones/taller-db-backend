import Health from '../models/health.model';

export default class HealthUseCase {
  constructor() {}
  execute(): Health {
    const res: Health = {
      status: 'UP',
      timestamp: new Date().toISOString()
    };
    return res;
  }
}
