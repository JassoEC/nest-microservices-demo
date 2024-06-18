import { Controller } from '@nestjs/common';
import { MicroserviceAService } from './microservice_a.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class MicroserviceAController {
  constructor(private readonly microserviceAService: MicroserviceAService) {}

  @MessagePattern('create_user')
  handleCreateUser(data: any): string {
    return this.microserviceAService.createUser(data);
  }

  @MessagePattern('delete_user')
  handleDeleteUser(data: any): string {
    return this.microserviceAService.deleteUser(data);
  }
}
