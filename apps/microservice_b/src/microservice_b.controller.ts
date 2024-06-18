import { Controller } from '@nestjs/common';
import { MicroserviceBService } from './microservice_b.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MicroserviceBController {
  constructor(private readonly microserviceBService: MicroserviceBService) {}

  @MessagePattern({ cmd: 'ping' })
  handleCreateUser(data: any): string {
    console.log(data);
    return this.microserviceBService.ping();
  }
}