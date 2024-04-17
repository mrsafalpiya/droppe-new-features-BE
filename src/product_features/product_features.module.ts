import { Module } from '@nestjs/common';
import { ProductFeaturesController } from './product_features.controller';
import { ProductFeaturesService } from './product_features.service';
import { DrizzleModule } from '@/drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  controllers: [ProductFeaturesController],
  providers: [ProductFeaturesService]
})
export class ProductFeaturesModule {}
