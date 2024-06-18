import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceAService {
  createUser(data: any): string {
    console.log(data);
    return 'User created success!!';
  }

  deleteUser(data: any): string {
    console.log(data);
    return 'User deleted success!!';
  }
}
