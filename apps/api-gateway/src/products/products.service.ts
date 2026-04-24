import { Inject, Injectable } from '@nestjs/common';
import { MICROSERVICE_CLIENTS } from '../constants';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.PRODUCTS) private productsClient: ClientProxy,
  ) {}

  getProduct(id: string) {
    return firstValueFrom(this.productsClient.send('products.GetOne', { id }));
  }
}
