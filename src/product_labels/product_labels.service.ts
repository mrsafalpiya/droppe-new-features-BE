import { PG_CONNECTION } from '@/drizzle/drizzle.constants';
import { DrizzleSchema } from '@/drizzle/drizzle.types';
import { Inject, Injectable } from '@nestjs/common';
import { label } from './product_labels.schema';

@Injectable()
export class ProductLabelsService {
  constructor(@Inject(PG_CONNECTION) private readonly db: DrizzleSchema) {}

  async addProductLabelForASubcategory(
    subcategoryId: number,
    newLabel: string,
  ) {
    return await this.db
      .insert(label)
      .values({ subcategoryId, title: newLabel })
      .returning({ value: label.id, label: label.title })
      .then((res) => res[0]);
  }
}
