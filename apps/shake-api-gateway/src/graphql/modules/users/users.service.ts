import { Injectable } from '@nestjs/common';
import { Responses } from './dtos/response-test.dto';
import { UserPayload } from './dtos/user-payload.dto';

@Injectable()
export class UsersService {
  getUser(): Responses {
    const user: UserPayload = {
      userName: 'userName',
      email: 'email@lago.com',
      role: 'role',
    };
    return {
      message: 'algo',
      payload: user,
    };
  }
}
