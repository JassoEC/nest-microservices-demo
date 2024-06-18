import { Module } from '@nestjs/common';
import { MicroserviceAController } from './microservice_a.controller';
import { MicroserviceAService } from './microservice_a.service';

@Module({
  imports: [],
  controllers: [MicroserviceAController],
  providers: [MicroserviceAService],
})
export class MicroserviceAModule {}
