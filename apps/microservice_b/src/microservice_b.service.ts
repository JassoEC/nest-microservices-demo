import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceBService {
  getRoles(): {
    message: string;
    payload: string[] | null;
  } {
    const mockRoles = ['Admin', 'Editor', 'User'];
    return {
      message: 'fetch roles',
      payload: mockRoles,
    };
  }
}
