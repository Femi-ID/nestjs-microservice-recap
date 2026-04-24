import { Controller, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('orderId/:orderId/productId/:productId')
  createOrder(
    @Param('orderId') orderId: string,
    @Param('productId') productId: string,
  ) {
    console.log(`order id: ${orderId} and productId: ${productId}`);
    return this.ordersService.createOrder(orderId, productId);
  }
}
