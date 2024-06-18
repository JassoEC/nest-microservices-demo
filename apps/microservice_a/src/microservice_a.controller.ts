import { Controller } from '@nestjs/common';
import { MicroserviceAService } from './microservice_a.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class MicroserviceAController {
  constructor(private readonly microserviceAService: MicroserviceAService) {}

  @MessagePattern('get_user')
  handleGetUser(data: any): {
    message: string;
    payload: {
      userName: string;
      email: string;
    } | null;
  } {
    return this.microserviceAService.getUser(data);
  }

  @MessagePattern('delete_user')
  handleDeleteUser(data: any): string {
    return this.microserviceAService.deleteUser(data);
  }
}
