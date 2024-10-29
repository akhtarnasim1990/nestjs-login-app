import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('config')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('database-url')
  getDatabaseUrl(): string {
    return this.appService.getDatabaseUrl();
  }

  @Get('jwt-secret')
  getJwtSecret(): string {
    return this.appService.getJwtSecret();
  }
}
