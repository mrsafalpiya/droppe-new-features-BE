import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  index() {
    return { message: "It's working!" };
  }
}
