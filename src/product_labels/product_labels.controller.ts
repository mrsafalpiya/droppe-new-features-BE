import { Body, Controller, Param, Post } from '@nestjs/common';
import { ProductLabelsService } from './product_labels.service';

@Controller('product-labels')
export class ProductLabelsController {
  constructor(private readonly productLabelsService: ProductLabelsService) {}

  @Post('/subcategory/:id')
  async addProductLabelForASubcategory(
    @Param('id') subcategoryId: string,
    @Body() data: { label: string },
  ) {
    return await this.productLabelsService.addProductLabelForASubcategory(
      parseInt(subcategoryId),
      data.label,
    );
  }
}
