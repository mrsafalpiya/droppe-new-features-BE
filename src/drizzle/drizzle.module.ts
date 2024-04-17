import { Module } from '@nestjs/common';
import { PG_CONNECTION } from './drizzle.constants';
import { DrizzleService } from './drizzle.service';

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [DrizzleService],
      useFactory: async (drizzleService: DrizzleService) => {
        return await drizzleService.getDrizzleInstance();
      },
    },
    DrizzleService,
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
