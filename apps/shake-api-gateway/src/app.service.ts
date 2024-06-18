import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('MICROSERVICE_A') private clientA: ClientProxy,
    @Inject('MICROSERVICE_B') private clientB: ClientProxy,
  ) {}
  getHello(): string {
    return 'Start gateway';
  }

  getUser(user: any): Observable<string> {
    return this.clientA.send('get_user', user);
  }

  getRoles(): Observable<string> {
    return this.clientB.send('get_roles', '');
  }
}
