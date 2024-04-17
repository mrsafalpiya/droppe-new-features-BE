import { Test, TestingModule } from '@nestjs/testing';
import { ProductLabelsService } from './product_labels.service';

describe('ProductLabelsService', () => {
  let service: ProductLabelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductLabelsService],
    }).compile();

    service = module.get<ProductLabelsService>(ProductLabelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
