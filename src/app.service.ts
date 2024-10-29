import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    return 'Hello world';
  }
  getDatabaseUrl(): string {
    return this.configService.get<string>('DATABASE_URL');
  }

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV');
  }

  getPort(): number {
    return this.configService.get<number>('PORT');
  }
}
