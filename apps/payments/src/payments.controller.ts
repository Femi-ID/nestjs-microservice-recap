import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  getHello(): string {
    return this.paymentsService.getHello();
  }

  @EventPattern('payments.Create')
  createPayment(orderId: string) {
    return this.paymentsService.createPayment(orderId);
  }
}
