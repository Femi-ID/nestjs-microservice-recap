import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getHello(): string {
    return this.ordersService.getHello();
  }

  @MessagePattern('orders.Create')
  createOrder(data: { orderId: string; productId: string }) {
    return this.ordersService.createOrder(data);
  }
}
