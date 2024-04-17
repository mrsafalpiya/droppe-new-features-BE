import { PG_CONNECTION } from '@/drizzle/drizzle.constants';
import { DrizzleSchema } from '@/drizzle/drizzle.types';
import { Inject, Injectable } from '@nestjs/common';
import { technicalResult } from './standards.schema';

@Injectable()
export class StandardsService {
  constructor(@Inject(PG_CONNECTION) private readonly db: DrizzleSchema) {}

  async addTechnicalResultInStandardVersion(
    standardVersionId: number,
    newTechnicalResult: string,
  ) {
    return await this.db
      .insert(technicalResult)
      .values({ standardVersionId, title: newTechnicalResult })
      .returning({ value: technicalResult.id, label: technicalResult.title })
      .then((res) => res[0]);
  }
}
