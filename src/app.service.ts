import { Injectable } from '@nestjs/common';
import { Config } from './config';

@Injectable()
export class AppService {
  constructor(private config: Config) {}

  getHello(): string {
    return `Hello World! from port ${this.config.BACKEND_PORT}`;
  }
}
