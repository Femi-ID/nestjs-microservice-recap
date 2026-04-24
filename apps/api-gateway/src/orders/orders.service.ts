import { Inject, Injectable } from '@nestjs/common';
import { MICROSERVICE_CLIENTS } from '../constants';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.ORDERS) private ordersClient: ClientProxy,
  ) {}
  createOrder(orderId: string) {
    console.log(`from order gateway service- order id: ${orderId}`);
    return firstValueFrom(this.ordersClient.send('orders.Create', { orderId }));
  }
}
