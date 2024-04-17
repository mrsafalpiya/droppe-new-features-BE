import { Module } from '@nestjs/common';
import { ProductLabelsController } from './product_labels.controller';
import { ProductLabelsService } from './product_labels.service';
import { DrizzleModule } from '@/drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  controllers: [ProductLabelsController],
  providers: [ProductLabelsService]
})
export class ProductLabelsModule {}
