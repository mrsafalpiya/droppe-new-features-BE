import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAll() {
    return await this.categoriesService.getAll();
  }

  @Get('subcategory/:id/features')
  async getFeaturesOfASubcategory(@Param('id') subCategoryId: string) {
    return await this.categoriesService.getFeaturesOfASubcategory(
      parseInt(subCategoryId),
    );
  }

  @Get('subcategory/:id/labels')
  async getLabelsOfASubcategory(@Param('id') subCategoryId: string) {
    return await this.categoriesService.getLabelsOfASubcategory(
      parseInt(subCategoryId),
    );
  }

  @Get('subcategory/:id/use-cases')
  async getUseCasesOfASubcategory(@Param('id') subCategoryId: string) {
    return await this.categoriesService.getUseCasesOfASubcategory(
      parseInt(subCategoryId),
    );
  }

  @Get('subcategory/:id/standards')
  async getStandardsOfASubcategory(@Param('id') subCategoryId: string) {
    return await this.categoriesService.getStandardsOfASubcategory(
      parseInt(subCategoryId),
    );
  }
}
