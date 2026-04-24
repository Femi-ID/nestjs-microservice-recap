import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from 'apps/api-gateway/src/constants';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.PAYMENTS) private paymentClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.PRODUCTS) private productsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder(data: { orderId: string; productId: string }) {
    this.paymentClient.emit('payments.Create', data.orderId);
    this.productsClient.emit('products.Update', data.productId);
    console.log('Order ID emitted to the payment and product micro-service');
    return {
      orderId: `${data.orderId}`,
      productId: data.productId,
      message: 'order successful',
    };
  }
}
