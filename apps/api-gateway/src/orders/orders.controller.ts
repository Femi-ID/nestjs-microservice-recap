import { Controller, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post(':id')
  createOrder(@Param('id') id: string) {
    console.log(`order id: ${id}`);
    return this.ordersService.createOrder(id);
  }
}
