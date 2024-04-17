import { Body, Controller, Param, Post } from '@nestjs/common';
import { ProductFeaturesService } from './product_features.service';

@Controller('product-features')
export class ProductFeaturesController {
  constructor(
    private readonly productFeaturesService: ProductFeaturesService,
  ) {}

  @Post(':id/values')
  async addFeatureTypePossibleValue(
    @Param('id') featureTypeId: string,
    @Body() data: { value: string },
  ) {
    return await this.productFeaturesService.addFeatureTypePossibleValue(
      parseInt(featureTypeId),
      data.value,
    );
  }
}
