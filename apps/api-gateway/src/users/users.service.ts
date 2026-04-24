import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client/client-proxy';
import { MICROSERVICE_CLIENTS } from '../constants';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.USERS) private usersClient: ClientProxy,
    @Inject(MICROSERVICE_CLIENTS.PRODUCTS) private productsClient: ClientProxy,
  ) {}

  getAllUsers() {
    this.productsClient.emit('products.Example', {
      name: 'femi idowu',
      gender: 'male',
    });
    return firstValueFrom(this.usersClient.send('users.FindAll', {}));
  }
}
