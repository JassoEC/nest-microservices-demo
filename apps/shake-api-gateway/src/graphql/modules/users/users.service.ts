import { Injectable } from '@nestjs/common';
import { Responses } from './dtos/response-test.dto';
import { UserPayload } from './dtos/user-payload.dto';
import { AppService } from 'apps/shake-api-gateway/src/app.service';
import { Observable, lastValueFrom } from 'rxjs';
import { GetUserInput } from './dtos/get-user.input.dto';

@Injectable()
export class UsersService {
  constructor(private readonly appService: AppService) {}
  async getUser(emailInput: GetUserInput): Promise<Responses> {
    const { email } = emailInput;
    const response: Observable<any> = this.appService.getUser(email);
    const responseRoles: Observable<any> = this.appService.getRoles();

    const data = await lastValueFrom(response);
    const roles = await lastValueFrom(responseRoles);

    const dataPayload = data.payload;

    return {
      message: data.message,
      payload: dataPayload ? { ...dataPayload, role: roles.payload[1] } : null,
    };
  }
}
