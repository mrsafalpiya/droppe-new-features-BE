import { PG_CONNECTION } from '@/drizzle/drizzle.constants';
import { DrizzleSchema } from '@/drizzle/drizzle.types';
import { Inject, Injectable } from '@nestjs/common';
import { featureValue } from './product_features.schema';

@Injectable()
export class ProductFeaturesService {
  constructor(@Inject(PG_CONNECTION) private readonly db: DrizzleSchema) {}

  async addFeatureTypePossibleValue(
    featureTypeId: number,
    value: string,
  ): Promise<{ value: number; label: string }> {
    return await this.db
      .insert(featureValue)
      .values({ featureTypeId: featureTypeId, value: value })
      .returning({ value: featureValue.id, label: featureValue.value })
      .then((res) => res[0]);
  }
}
