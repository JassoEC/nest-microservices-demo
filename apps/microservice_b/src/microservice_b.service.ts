import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceBService {
  getRoles(): {
    message: string;
    payload: string[] | null;
  } {
    console.log('microservice B');
    const mockRoles = ['Admin', 'Editor', 'User'];
    console.log(mockRoles);
    return {
      message: 'fetch roles',
      payload: mockRoles,
    };
  }
}
