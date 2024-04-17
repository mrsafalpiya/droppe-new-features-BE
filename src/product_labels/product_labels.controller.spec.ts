import { Test, TestingModule } from '@nestjs/testing';
import { ProductLabelsController } from './product_labels.controller';

describe('ProductLabelsController', () => {
  let controller: ProductLabelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductLabelsController],
    }).compile();

    controller = module.get<ProductLabelsController>(ProductLabelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
