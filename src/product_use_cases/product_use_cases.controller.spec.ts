import { Test, TestingModule } from '@nestjs/testing';
import { ProductUseCasesController } from './product_use_cases.controller';

describe('ProductUseCasesController', () => {
  let controller: ProductUseCasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductUseCasesController],
    }).compile();

    controller = module.get<ProductUseCasesController>(ProductUseCasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
