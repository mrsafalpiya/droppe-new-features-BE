import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

dotenvExpand.expand(
  dotenv.config({
    path: './.env',
  }),
);

export default {
  schema: './src/drizzle/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
