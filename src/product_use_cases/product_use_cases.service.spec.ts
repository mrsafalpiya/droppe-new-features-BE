import { Test, TestingModule } from '@nestjs/testing';
import { ProductUseCasesService } from './product_use_cases.service';

describe('ProductUseCasesService', () => {
  let service: ProductUseCasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductUseCasesService],
    }).compile();

    service = module.get<ProductUseCasesService>(ProductUseCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
