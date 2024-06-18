import { Body, Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getUser(@Body() body: any): Promise<{ data: string }> {
    const response: Observable<string> = this.appService.getUser(body.email);
    const data: string = await lastValueFrom(response);
    return {
      data,
    };
  }

  @Get()
  async getRoles(): Promise<{ data: string }> {
    const response: Observable<string> = this.appService.getRoles();
    const data: string = await lastValueFrom(response);
    return {
      data,
    };
  }
}
