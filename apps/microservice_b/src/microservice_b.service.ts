import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceBService {
  ping(): string {
    return 'Ping microservice b';
  }
}
