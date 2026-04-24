import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getHello(): string {
    return 'Hello World!';
  }

  getProduct(id: string) {
    console.log(
      `from products microservice: product id: ${JSON.stringify(id)}`,
    );
    return { productId: id, productDetail: 'lorem ipsum random words here...' };
  }

  updateProduct(productId: string) {
    console.log(
      `from products microservice(service): product id: ${productId}`,
    );
  }
}
