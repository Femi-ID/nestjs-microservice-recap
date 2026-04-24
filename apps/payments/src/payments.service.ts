import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  getHello(): string {
    return 'Hello World!';
  }

  createPayment(orderId: string) {
    console.log(
      `Order ID- ${JSON.stringify(orderId)} received from the order micro-service`,
    );
    return {
      message: `payment successful for order- ${JSON.stringify(orderId)}`,
      paymentId: `1234-${orderId}`,
    };
  }
}
