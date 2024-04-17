import { Module } from '@nestjs/common';
import { ProductUseCasesController } from './product_use_cases.controller';
import { ProductUseCasesService } from './product_use_cases.service';
import { DrizzleModule } from '@/drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  controllers: [ProductUseCasesController],
  providers: [ProductUseCasesService]
})
export class ProductUseCasesModule {}
