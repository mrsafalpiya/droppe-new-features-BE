import { Body, Controller, Param, Post } from '@nestjs/common';
import { ProductUseCasesService } from './product_use_cases.service';

@Controller('product-use-cases')
export class ProductUseCasesController {
  constructor(
    private readonly productUseCasesService: ProductUseCasesService,
  ) {}

  @Post('/subcategory/:id')
  async addProductUseCaseForASubcategory(
    @Param('id') subcategoryId: string,
    @Body() data: { useCase: string },
  ) {
    return await this.productUseCasesService.addProductUseCaseForASubcategory(
      parseInt(subcategoryId),
      data.useCase,
    );
  }
}
