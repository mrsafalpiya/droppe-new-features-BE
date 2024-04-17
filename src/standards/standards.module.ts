import { Module } from '@nestjs/common';
import { StandardsController } from './standards.controller';
import { StandardsService } from './standards.service';
import { DrizzleModule } from '@/drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  controllers: [StandardsController],
  providers: [StandardsService],
})
export class StandardsModule {}
