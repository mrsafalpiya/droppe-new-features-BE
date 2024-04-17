import { PG_CONNECTION } from '@/drizzle/drizzle.constants';
import { DrizzleSchema } from '@/drizzle/drizzle.types';
import { Inject, Injectable } from '@nestjs/common';
import { useCase } from './product_use_cases.schema';

@Injectable()
export class ProductUseCasesService {
  constructor(@Inject(PG_CONNECTION) private readonly db: DrizzleSchema) {}

  async addProductUseCaseForASubcategory(
    subcategoryId: number,
    newUseCase: string,
  ) {
    return await this.db
      .insert(useCase)
      .values({ subcategoryId, title: newUseCase })
      .returning({ value: useCase.id, label: useCase.title })
      .then((res) => res[0]);
  }
}
