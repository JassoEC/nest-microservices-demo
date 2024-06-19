import { Injectable } from '@nestjs/common';
import { Console } from 'console';

@Injectable()
export class MicroserviceAService {
  getUser(email: string): {
    message: string;
    payload: {
      userName: string;
      email: string;
    } | null;
  } {
    console.log({ email });
    const mockUsers = [
      {
        userName: 'userName',
        email: 'email@domain.com',
      },
      {
        userName: 'userName2',
        email: 'email2@domain.com',
      },
    ];
    console.log('microservice A');
    const user = mockUsers.find((el) => el.email === email);
    return {
      message: user ? 'fetch user' : 'user not found',
      payload: user ?? null,
    };
  }

  deleteUser(data: any): string {
    console.log(data);
    return 'User deleted success!!';
  }
}
