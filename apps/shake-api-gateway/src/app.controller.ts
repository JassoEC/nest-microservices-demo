import { Body, Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: any): Observable<string> {
    return this.appService.newUser(body);
  }

  @Get()
  ping(): Observable<string> {
    return this.appService.ping();
  }
}
