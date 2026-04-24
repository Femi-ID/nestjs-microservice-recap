import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getHello(): string {
    return this.productsService.getHello();
  }

  @MessagePattern('products.GetOne')
  getProduct(id: string) {
    return this.productsService.getProduct(id);
  }

  @EventPattern('products.Example')
  productExample(obj) {
    console.log('From product example controller', obj);
  }

  @EventPattern('products.Update')
  updateProduct(productId: string) {
    console.log(
      'Event listened from products(controller) microservice',
      productId,
    );
    return this.productsService.updateProduct(productId);
  }
}
