import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from 'apps/api-gateway/src/constants';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.PAYMENTS) private paymentClient: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  createOrder(orderId: string) {
    this.paymentClient.emit('payments.Create', { orderId });
    console.log('Order ID emitted to the payment micro-service');
    return {
      orderId: `${JSON.stringify(orderId)}`,
      message: 'order successful',
    };
  }
}
