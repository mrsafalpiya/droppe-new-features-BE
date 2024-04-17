import { Test, TestingModule } from '@nestjs/testing';
import { ProductFeaturesController } from './product_features.controller';

describe('ProductFeaturesController', () => {
  let controller: ProductFeaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductFeaturesController],
    }).compile();

    controller = module.get<ProductFeaturesController>(ProductFeaturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
