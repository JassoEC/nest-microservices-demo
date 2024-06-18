import { Controller } from '@nestjs/common';
import { MicroserviceBService } from './microservice_b.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MicroserviceBController {
  constructor(private readonly microserviceBService: MicroserviceBService) {}

  @MessagePattern('get_roles')
  handleGetRoles(data: any): {
    message: string;
    payload: string[] | null;
  } {
    console.log(data);
    return this.microserviceBService.getRoles();
  }
}
