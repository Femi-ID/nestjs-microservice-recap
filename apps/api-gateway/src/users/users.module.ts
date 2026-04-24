import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICE_CLIENTS.USERS,
        transport: Transport.TCP,
        options: { port: 3004 },
      },
      {
        name: MICROSERVICE_CLIENTS.PRODUCTS,
        transport: Transport.TCP,
        options: { port: 3003 },
      },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
