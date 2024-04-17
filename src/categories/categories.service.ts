import { PG_CONNECTION } from '@/drizzle/drizzle.constants';
import { DrizzleSchema } from '@/drizzle/drizzle.types';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  constructor(@Inject(PG_CONNECTION) private readonly db: DrizzleSchema) {}

  async getAll() {
    return await this.db.query.category.findMany({
      with: {
        subcategories: true,
      },
    });
  }

  async getFeaturesOfASubcategory(id: number) {
    return await this.db.query.featureType.findMany({
      where: (fields, { eq }) => eq(fields.subcategoryId, id),
      with: {
        possibleValues: true,
      },
    });
  }

  async getLabelsOfASubcategory(id: number) {
    return await this.db.query.label.findMany({
      where: (fields, { eq }) => eq(fields.subcategoryId, id),
    });
  }

  async getUseCasesOfASubcategory(id: number) {
    return await this.db.query.useCase.findMany({
      where: (fields, { eq }) => eq(fields.subcategoryId, id),
    });
  }

  async getStandardsOfASubcategory(id: number) {
    return await this.db.query.standard.findMany({
      where: (fields, { eq }) => eq(fields.subcategoryId, id),
      with: { versions: { with: { technicalResults: true } } },
    });
  }
}
