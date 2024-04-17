import { Injectable } from '@nestjs/common';
import { Config } from '@/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

@Injectable()
export class DrizzleService {
  constructor(private config: Config) {}

  async getDrizzleInstance() {
    const pool = new Pool({
      connectionString: this.config.DATABASE_URL,
    });

    return drizzle(pool, { schema });
  }
}
